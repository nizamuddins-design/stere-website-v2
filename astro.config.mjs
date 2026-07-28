// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/Home.dc.html': '/',
    '/About-Us.dc.html': '/about-us',
    '/Autonomous-Agents.dc.html': '/autonomous-agents',
    '/Carriers.dc.html': '/carriers',
    '/Contact.dc.html': '/contact',
    '/Demo.dc.html': '/demo',
    '/Distribution-Platforms.dc.html': '/distribution-platforms',
    '/Hero-options.dc.html': '/hero-options',
    '/Information-Security.dc.html': '/information-security',
    '/Insights.dc.html': '/insights',
    '/Launch Guide.dc.html': '/launch-guide',
    '/Launch%20Guide.dc.html': '/launch-guide',
    '/MGA-Aggregators.dc.html': '/mga-aggregators',
    '/MGAs.dc.html': '/mgas',
    '/Master-Agreement.dc.html': '/master-agreement',
    '/Mutuals.dc.html': '/mutuals',
    '/Platform.dc.html': '/platform',
    '/Privacy-Policy.dc.html': '/privacy-policy',
    '/Terms-of-Use.dc.html': '/terms-of-use',
  }
});
