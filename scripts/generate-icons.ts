
import fs from 'fs-extra';
import path from 'path';
import { glob } from 'glob';
import { optimize } from 'svgo';
import * as cheerio from 'cheerio';
import prettier from 'prettier';

const PACKAGES_DIR = path.resolve(__dirname, '../packages');
const SVG_SOURCES_DIR = path.resolve(__dirname, '../svg-sources');

// Template for the icon component
const componentTemplate = (iconName: string, svgContent: string) => `
import { IconBase, IconBaseProps, IconType } from "@react-icons-cloud/core";
import React from "react";

export const ${iconName}: IconType = React.forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => (
  <IconBase ref={ref} {...props}>
    ${svgContent}
  </IconBase>
));
${iconName}.displayName = "${iconName}";
`;

async function generateIconsForPackage(packageName: string) {
  const sourceDir = path.join(SVG_SOURCES_DIR, packageName);
  const packageDir = path.join(PACKAGES_DIR, packageName);
  const outputDir = path.join(packageDir, 'src/icons');
  const indexFile = path.join(packageDir, 'src/index.ts');

  if (!fs.existsSync(sourceDir)) {
    console.error(`Source directory not found: ${sourceDir}`);
    return;
  }

  // Ensure output directory exists
  await fs.ensureDir(outputDir);

  const svgFiles = await glob('*.svg', { cwd: sourceDir });
  const exports: string[] = [];

  console.log(`Generating icons for ${packageName}...`);

  for (const file of svgFiles) {
    const filePath = path.join(sourceDir, file);
    const svgContentOriginal = await fs.readFile(filePath, 'utf8');

    // Optimize SVG
    const optimized = optimize(svgContentOriginal, {
      plugins: [
        'preset-default',
        'removeDimensions',
        'removeXMLNS',
        {
          name: 'removeAttrs',
          params: {
            attrs: '(fill|stroke)',
          },
        },
      ],
    });

    const $ = cheerio.load(optimized.data || '', { xmlMode: true });
    // Convert attributes to React camelCase
    $('*').each((_, el) => {
      if (el.type !== 'tag') return;
      const attribs = el.attribs;
      for (const name in attribs) {
        if (name.includes('-')) {
          const value = attribs[name];
          const camelName = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          $(el).removeAttr(name);
          $(el).attr(camelName, value);
        }
        if (name === 'class') {
           const value = attribs[name];
           $(el).removeAttr(name);
           $(el).attr('className', value);
        }
      }
    });

    const innerContent = $('svg').html();

    if (!innerContent) {
      console.warn(`Could not extract content from ${file}`);
      continue;
    }

    const iconName = toPascalCase(path.basename(file, '.svg'));
    const componentCode = componentTemplate(iconName, innerContent);
    const formattedCode = await prettier.format(componentCode, { parser: 'typescript' });

    await fs.writeFile(path.join(outputDir, `${iconName}.tsx`), formattedCode);
    exports.push(`export { ${iconName} } from "./icons/${iconName}";`);
    console.log(`Generated ${iconName}`);
  }

  // Write index file
  const indexContent = exports.join('\n');
  await fs.writeFile(indexFile, indexContent + '\n');
  console.log(`Updated index.ts for ${packageName}`);
}

function toPascalCase(str: string): string {
  return str
    .replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
    .replace(/^\w/, c => c.toUpperCase());
}

// Run for 'aws' package by default or argument
const targetPackage = process.argv[2] || 'aws';
generateIconsForPackage(targetPackage).catch(console.error);
