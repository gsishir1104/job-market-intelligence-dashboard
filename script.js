const jobs = [
  { role: "Data Analyst", salary: 72000, skills: ["SQL", "Power BI", "Excel", "Python"] },
  { role: "Software Developer", salary: 85000, skills: ["JavaScript", "React", "GitHub", "API"] },
  { role: "AI Associate", salary: 78000, skills: ["Python", "Machine Learning", "Pandas", "AI"] },
  { role: "Web Developer", salary: 70000, skills: ["HTML", "CSS", "JavaScript", "React"] },
  { role: "Data Analyst", salary: 74000, skills: ["SQL", "Tableau", "Excel", "Dashboarding"] },
  { role: "Game Developer", salary: 76000, skills: ["Unity", "C#", "Game Design", "JavaScript"] }
];

function loadDashboard() {
  document.getElementById("totalJobs").innerText = jobs.length;

  const avgSalary = Math.round(
    jobs.reduce((sum, job) => sum + job.salary, 0) / jobs.length
  );

  document.getElementById("avgSalary").innerText = "$" + avgSalary.toLocaleString();

  const roleCount = {};
  const skillCount = {};

  jobs.forEach(job => {
    roleCount[job.role] = (roleCount[job.role] || 0) + 1;

    job.skills.forEach(skill => {
      skillCount[skill] = (skillCount[skill] || 0) + 1;
    });
  });

  const topRole = Object.keys(roleCount).sort((a, b) => roleCount[b] - roleCount[a])[0];
  const topSkill = Object.keys(skillCount).sort((a, b) => skillCount[b] - skillCount[a])[0];

  document.getElementById("topRole").innerText = topRole;
  document.getElementById("topSkill").innerText = topSkill;

  const roleChart = document.getElementById("roleChart");
  roleChart.innerHTML = "";

  Object.keys(roleCount).forEach(role => {
    const div = document.createElement("div");
    div.innerText = role + " — " + roleCount[role] + " jobs";
    roleChart.appendChild(div);
  });

  const skillList = document.getElementById("skillList");
  skillList.innerHTML = "";

  Object.keys(skillCount).forEach(skill => {
    const div = document.createElement("div");
    div.innerText = skill + " — " + skillCount[skill] + " mentions";
    skillList.appendChild(div);
  });

  const insights = document.getElementById("insights");
  insights.innerHTML = "";

  const insightTexts = [
    "SQL, Python, Excel, and dashboarding tools are important for data-focused roles.",
    "JavaScript and React are useful for entry-level software and web developer roles.",
    "AI and machine learning skills can strengthen entry-level technology profiles.",
    "Building projects with live demos and GitHub links can improve recruiter visibility."
  ];

  insightTexts.forEach(text => {
    const li = document.createElement("li");
    li.innerText = text;
    insights.appendChild(li);
  });
}

loadDashboard();

function showRole(role) {

  const roleData = {
    "Data Analyst": {
      salary: "$72,000",
      skills: "SQL, Power BI, Excel, Python",
      insight: "Data Analysts are highly valued for reporting, dashboarding, and business intelligence."
    },

    "Software Developer": {
      salary: "$85,000",
      skills: "JavaScript, React, APIs, Git",
      insight: "Software Developers are in demand across web, mobile, and enterprise applications."
    },

    "AI Engineer": {
      salary: "$95,000",
      skills: "Python, Machine Learning, LLMs, TensorFlow",
      insight: "AI Engineers are among the fastest-growing technology roles."
    },

    "Web Developer": {
      salary: "$70,000",
      skills: "HTML, CSS, JavaScript, React",
      insight: "Web Developers build modern user experiences and business applications."
    },

    "Game Developer": {
      salary: "$76,000",
      skills: "Unity, C#, Game Design, AI",
      insight: "Game Developers combine creativity, programming, and interactive design."
    }
  };

  document.getElementById("topRole").innerText = role;

  document.getElementById("avgSalary").innerText =
    roleData[role].salary;

  document.getElementById("topSkill").innerText =
    roleData[role].skills.split(",")[0];

  document.getElementById("skillList").innerHTML =
    "<div>" + roleData[role].skills + "</div>";

  document.getElementById("insights").innerHTML =
    "<li>" + roleData[role].insight + "</li>";
}