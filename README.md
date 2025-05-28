  # PINGME

  *Streamline guest interactions, elevate your service experience.* 

  
You can access the dashboard at this live link: https://ping-me-one.vercel.app/


<p align="center">
  <img src="https://img.shields.io/badge/last%20commit-today-brightgreen" alt="last commit"/>
  <img src="https://img.shields.io/badge/typescript-88.7%25-blue" alt="typescript"/>
  <img src="https://img.shields.io/badge/languages-3-blue" alt="languages"/>
</p>

<p align="center"><i>Built with the tools and technologies:</i></p>

<p align="center">
  <img src="https://img.shields.io/badge/JSON-000000?logo=json&logoColor=white" alt="JSON"/>
  <img src="https://img.shields.io/badge/Markdown-000000?logo=markdown&logoColor=white" alt="Markdown"/>
  <img src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white" alt="npm"/>
  <img src="https://img.shields.io/badge/Autoprefixer-EF3B34?logo=autoprefixer&logoColor=white" alt="Autoprefixer"/>
  <img src="https://img.shields.io/badge/PostCSS-DD3A0A?logo=postcss&logoColor=white" alt="PostCSS"/>
  <img src="https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black" alt="Prettier"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript"/>
  <br/>
  <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/ts--node-3178C6?logo=ts-node&logoColor=white" alt="ts-node"/>
  <img src="https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white" alt="Prisma"/>
  <img src="https://img.shields.io/badge/ngrok-1F1F1F?logo=ngrok&logoColor=white" alt="ngrok"/>
  <img src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white" alt="ESLint"/>
  <img src="https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white" alt="Jest"/>
</p>

---

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)
- [Built With](#built-with)
- [Key Features](#key-features)
- [Contribution](#contribution)
- [License](#license)

---

## Overview

pingMe is a powerful developer tool designed to streamline guest request logging through an integrated workflow of n8n.io, NestJS, and Next.js.


<img src="https://github.com/user-attachments/assets/ee2633d1-be18-4dea-a051-a3cab5ee2a03" alt="pingMe dashboard overview" width="800"/>




### Why pingMe?

This project enhances user experience and operational efficiency by providing a robust solution for tracking and responding to guest requests. The core features include:

- 🚀 **Integration of Technologies:** Seamlessly combines n8n.io, NestJS, and Next.js for a cohesive workflow.
- 📊 **Robust Request Management:** Efficiently captures and tracks guest interactions, improving operational efficiency.
- 🔒 **Real-time Collaboration:** Utilizes ngrok for secure tunneling, facilitating easy sharing of local environments.
- 🏗️ **Modular Architecture:** Built with NestJS, promoting maintainability and scalability for developers.
- ✅ **Comprehensive Testing:** End-to-end testing with Jest ensures reliability and reduces bugs.
- 🎨 **User-friendly Frontend:** Leverages Next.js and Tailwind CSS for a modern, responsive UI.

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** TypeScript
- **Package Manager:** Npm
- **Node.js:** v18 or above recommended

### Installation

Build pingMe from the source and install dependencies:

1. **Clone the repository:**

```bash
git clone https://github.com/bikas295/pingMe
```

2. **Navigate to the project directory:**

```bash
cd pingMe
```

3. **Install the dependencies:**

Using npm:

```bash
npm install
```

### Usage
Run the project with:

Using npm:

```bash
cd backend
npm run start:dev
```

In another terminal:
```bash
cd frontend
npm run dev
```

To access the n8n workflow, you can run the below command and download in JSON format. 

After that place it inside `/workflow/request-workflow.json` directly to run your n8n instance locally.


```bash
n8n
```

>*Note: You can use ngrok to expose your n8n online.*



For setting up Twilio for WhatsApp Sandox API access, you can use the docs for reference: https://www.twilio.com/docs 

And for integrating the database you use can your own postgreSQL server link.



<img src="https://github.com/user-attachments/assets/cc42e562-42a0-4ae4-a60b-0aa6c144a780" alt="Workflow Diagram" width="800"/>
<p>⬆️ Workflow Diagram</p>




### Testing

pingMe uses the Jest test framework. Run the test suite with:

Using npm:

```bash
npm test
```


## Built With
- **Frontend**:  Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**:  NestJS, TypeScript
- **Workflow Automation**:  n8n.io
- **Database**:  PostgreSQL


## Key Features
- Real-time guest request management
- Automated workflow processing
- Responsive and modern UI
- RESTful API architecture
- Type-safe development with TypeScript

## Contribution
1. Fork the repository
2. Create your feature branch `git checkout -b feature/AmazingFeature`
3. Commit your changes `git commit -m 'Add some AmazingFeature'`
4. Push to the branch `git push origin feature/AmazingFeature`
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
