---
title: "You Did Not Install LiteLLM. It Is Already In Your Stack."
description: "LiteLLM got breached. Most AI developers don't know they're running it. Here's why AI supply chain security is structurally different and what to do about it."
date: 2026-03-25
tags: ["security", "ai-agents", "supply-chain", "open-source"]
draft: false
---

# You Did Not Install LiteLLM. It Is Already In Your Stack.

LiteLLM is a model proxy. It sits between your code and your model providers. OpenAI, Anthropic, Cohere. Every call passes through it. Every key passes through it.

It just got hit with a supply chain attack.

You probably never installed it directly. It came in as a transitive dependency through LangChain, CrewAI, and other agent frameworks. Somewhere in that dependency tree, LiteLLM got pulled in. You never chose it. You never audited it. But it has been handling your credentials.

The story is not that a package got compromised. The story is that the compromised package sits in the credential path of thousands of AI projects whose developers do not know it is there.

## Why AI supply chains break differently

Most supply chain attacks hit utility packages. A compromised color library in npm is bad but bounded. It does not hold your API keys.

AI stacks work differently. The transitive dependencies are not static utilities. They are active intermediaries. Model routers. Prompt handlers. Credential managers. They sit between your code and your API keys.

A breach in a string formatter corrupts output. A breach in a model proxy gives the attacker a position on your credentials and your traffic.

The security tooling has not caught up to this distinction.

## Three reasons this gets worse

1. Concentration

The AI ecosystem is young. A small number of packages handle model routing for a disproportionate share of projects. When one of those packages gets hit, the blast radius is immediate.

2. Credential exposure

In a traditional web app, database credentials sit behind your ORM, managed by your deployment pipeline. In AI stacks, API keys flow through multiple intermediary libraries. The model router touches them. The prompt engine might log them. The agent framework passes them to tool-calling functions. Most developers have never mapped which packages in their stack have access to which keys.

3. Speed

New frameworks every week. Developers pip install, copy a quickstart, ship. Nobody reads the dependency tree of a framework they adopted from a tutorial.

## What to do about it

Map your dependency tree. Not just what you installed. What got installed. Run pipdeptree on your project. Find every package that touches API keys or model routing.

Pin your versions. Loose version constraints are how compromised minor releases flow into your stack automatically.

Treat model proxies as auth code. Any library that holds your API keys deserves the same scrutiny as your login flow. It holds the keys. It controls the traffic. Functionally, it is auth.

Watch the transitive layer. The risk is not in the packages you chose. It is in the packages your packages chose.

## The missing frame

There is no established practice for AI supply chain security. Traditional SCA tools check for known CVEs and flag deprecated packages. They do not distinguish between a string utility with a buffer overflow and a model proxy with full credential access.

These are different threat models. A utility library has a bug. An intermediary library has been taken over. The blast radius, the exfiltration potential, and the remediation are completely different.

We need tooling that understands this distinction. We need dependency analysis that knows which packages sit in the credential path, not just which packages have known CVEs.

The attack surface is not your code. It is everything your code trusts without asking.

---

I built [agent-infra-security](https://github.com/makash/agent-infra-security) for this. Open source agent skills that scan your AI dependency tree for compromised packages and IOCs. Runs inside Claude Code, Codex, or Cursor.
