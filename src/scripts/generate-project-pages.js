// Script to generate individual MDX pages for each project
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name properly in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read project data
const projectData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/featured.json'), 'utf-8'));

// Create projects directory if it doesn't exist
const projectsDir = path.join(__dirname, '../pages/projects');
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// Function to create a project MDX file
function createProjectMDX(project) {
  const { slug, title, description, language, url, category, repo, stars, status } = project;
  
  // Format the repo name for display
  const repoName = repo || "";
  const githubUrl = repo ? `https://github.com/${repo}` : url;
  
  // Generate some placeholder sections based on the project type
  let featuresSection = '';
  let techSection = '';
  
  if (category === 'AI') {
    featuresSection = `
## Key Features

- Advanced AI model integration
- Real-time processing capabilities
- Scalable architecture
- Easy-to-use API interface
- Comprehensive documentation
`;
    techSection = `
## Technical Details

This project leverages modern ${language} practices and is built with a focus on performance and scalability.

\`\`\`${language.toLowerCase()}
// Example code snippet
function processData(input) {
  // AI processing logic
  return enhancedOutput;
}
\`\`\`

### Architecture

The system follows a modular architecture with clear separation of concerns:

1. Data ingestion layer
2. Processing pipeline
3. Model execution
4. Result delivery
`;
  } else if (category === 'Products') {
    featuresSection = `
## Product Features

- Intuitive user interface
- Seamless data management
- Cross-platform compatibility
- Robust security measures
- User-centric design
`;
    techSection = `
## Implementation Details

Built with ${language} and modern development practices, this product focuses on delivering an exceptional user experience.

### User Flow

1. User onboarding
2. Main functionality
3. Data visualization
4. Settings and preferences
5. Feedback mechanism
`;
  } else {
    featuresSection = `
## Concept Highlights

- Innovative approach to ${title.split(' ').pop()} solutions
- Forward-thinking design
- Extensible framework
- Research-backed methodologies
`;
    techSection = `
## Conceptual Framework

This project explores new possibilities in the ${category.toLowerCase()} space using ${language} as its foundation.

### Research Areas

- Market analysis
- Technical feasibility
- User need assessment
- Implementation roadmap
`;
  }
  
  // Create MDX content
  const mdxContent = `---
layout: ../../layouts/Layout.astro
title: "${title} | Project Details"
description: "${description}"
---

import { Callout } from "@/components/ui/callout";
import { Badge } from "@/components/ui/badge";

# ${title} <Badge variant="${getStatusVariant(status)}">${status}</Badge>

${description}

<Callout>
  This project uses **${language}** and falls under the **${category}** category.
  ${stars > 0 ? `It has received ${stars} ${stars === 1 ? 'star' : 'stars'} on GitHub.` : ''}
</Callout>

${featuresSection}

${techSection}

## Links

- [GitHub Repository](${githubUrl})
${repo ? `- [View Source Code](https://github.com/${repo}/tree/main)` : ''}
${repo ? `- [Report Issues](https://github.com/${repo}/issues)` : ''}

## Related Projects

You might also be interested in other ${category} projects in my portfolio.

[← Back to All Projects](/projects)
`;

  // Write the MDX file
  const filePath = path.join(projectsDir, `${slug}.mdx`);
  fs.writeFileSync(filePath, mdxContent);
  console.log(`Created: ${path.join('src/pages/projects', `${slug}.mdx`)}`);
}

// Helper function to determine badge variant based on status
function getStatusVariant(status) {
  switch(status) {
    case 'Active':
      return 'success';
    case 'Maintained':
      return 'secondary';
    case 'Archived':
      return 'outline';
    case 'Paused':
      return 'destructive';
    case 'Concept':
      return 'accent';
    default:
      return 'default';
  }
}

// Generate MDX files for each project
projectData.forEach(createProjectMDX);

console.log(`Successfully generated ${projectData.length} project pages.`);

// Create an instruction file
const readmeContent = `# Project Pages Generator

This script generates individual MDX pages for each project based on the data in featured.json.

## How to Use

1. Run this script from the project root:
   \`\`\`
   node src/scripts/generate-project-pages.js
   \`\`\`

2. The script will:
   - Create the directory 'src/pages/projects/' if it doesn't exist
   - Generate an MDX file for each project in featured.json
   - Each file will be named using the project's slug

3. To customize the generated content:
   - Edit the template in the createProjectMDX function
   - Add more project-specific data to featured.json
   - Implement custom logic based on project categories

## File Structure

Each generated file follows this structure:
- Frontmatter with layout, title and description
- Project title and description
- Callout with language and category
- Features section (customized by category)
- Technical details (customized by category)
- Links to GitHub and related resources
- Navigation back to the projects page
`;

fs.writeFileSync(path.join(__dirname, 'README-project-generator.md'), readmeContent);
console.log('Created generator README file.'); 