import { Grok } from "grok-sdk";
const grok = new Grok({ apiKey: process.env.GROK_API_KEY });

export async function generateBrief(data) {
  const prompt = `
You are McKinsey. Write a 12-section digital-strategy brief.

Company: ${data.name}
Industry: ${data.industry}
Revenue: $${data.revenue}M
Challenge: ${data.challenge}

Sections:
1. Executive Summary
2. Market Context
3. Digital Maturity Score
4. 3-Year Vision
5. Priority Initiatives
6. Tech Stack Roadmap
7. Org Change Plan
8. KPI Dashboard
9. Investment Case
10. Risks & Mitigations
11. 90-Day Quick Wins
12. Next Steps

Tone: Bold, data-driven, CEO-ready. 150 words/section.
`;

  const res = await grok.chat(prompt, { model: "grok-3" });
  return res.choices[0].message.content;
}
