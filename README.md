# Job Market Intelligence Dashboard

An interactive frontend demo that summarizes a small, embedded job dataset and displays career-role examples. Built with HTML, CSS, and plain JavaScript, it demonstrates aggregation, frequency counting, and dashboard updates without a backend.

## Features

- Summary cards for job count, average salary, most frequent role, and most frequent skill.
- Role counts and skill-mention counts generated from six sample records.
- Buttons for Data Analyst, Software Developer, AI Engineer, Web Developer, and Game Developer.
- Role-specific salary, skill, and insight text.
- CSS Grid layouts with a mobile breakpoint.

## Data and behavior

All data is hardcoded in [script.js](script.js). The initial dashboard aggregates the `jobs` array; its six entries produce an average salary of $75,833 after rounding.

Selecting a role reads a separate `roleData` lookup and replaces the displayed role, salary, top skill, skill list, and insight. It does not filter the original dataset: the total job count and role-demand list remain unchanged. The sample dataset uses "AI Associate," while the role selector has a separate "AI Engineer" example.

Salary values, demand labels, and career insights are illustrative content with no cited market dataset. They should not be interpreted as current market statistics. There is no live job API, scraping pipeline, forecasting model, or Python analytics backend.

## Run locally

```bash
git clone https://github.com/gsishir1104/job-market-intelligence-dashboard.git
cd job-market-intelligence-dashboard
```

Open `index.html` in a modern browser. No package installation or build step is needed.

For an optional local server, with Python 3 installed:

```bash
python -m http.server 8000
```

Then open [localhost:8000](http://localhost:8000). Python serves the files only.

## Explore the demo

1. Review the initial six-record summary.
2. Select a career role to see its predefined details.
3. Compare the role and skill lists with the data in `script.js`.
4. Resize the browser to inspect the mobile layout.

## Source guide

| File | Responsibility |
| --- | --- |
| [index.html](index.html) | Role controls, summary cards, and dashboard sections |
| [script.js](script.js) | Sample data, aggregations, and role-selection behavior |
| [style.css](style.css) | Cards, grids, and responsive styles |

## Engineering focus

This project demonstrates JavaScript array operations, object-based frequency counting, DOM rendering, and responsive dashboard presentation. Live data integration and analytical validation would be separate future work.

## Author

[Sishir Gottumukkala](https://github.com/gsishir1104) · [LinkedIn](https://linkedin.com/in/sishir-gottumukkala-9a7a43235)
