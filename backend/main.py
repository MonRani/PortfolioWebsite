# from fastapi import FastAPI, HTTPException
# from pydantic import BaseModel
# import google.generativeai as genai
# from fastapi.middleware.cors import CORSMiddleware
# import os
# from dotenv import load_dotenv
#
# app = FastAPI()
#
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://127.0.0.1:3000", "http://localhost:3000"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )
#
# load_dotenv()
# GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
# genai.configure(api_key=GEMINI_API_KEY)
#
# # Correct model name
# model = genai.GenerativeModel('gemini-1.5-flash')
#
# class ChatRequest(BaseModel):
#     message: str
#
# @app.post("/chat")
# async def chat(request: ChatRequest):
#     try:
#         response = model.generate_content(request.message)
#         return {"response": response.text}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))
#
# @app.get("/")
# async def root():
#     return {"message": "Chatbot API is running"}

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import google.generativeai as genai
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:3000", "http://localhost:3000", "http://localhost:8080"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)

SYSTEM_INSTRUCTION = """You are Monisha Rani Dhana Vijeya's portfolio chatbot. You help visitors learn about Monisha's background, skills, and experience.

ABOUT MONISHA:
- MS Computer Science student at Northeastern University, Khoury College (graduating May 2026)
- Located in Sunnyvale, CA
- Software Engineering expert specializing in AI systems, backend architecture, and automation
- Contact: (669)-329-9699 | LinkedIn | GitHub | Medium

WORK EXPERIENCE:
- Software Engineering Intern - Agentic AI at Evenness Inc (Jun-Sep 2025): Architected autonomous AI agents processing 1000+ websites for WCAG 2.2 compliance, built monitoring dashboards reducing manual workflows by 60%
- Backend Lead at IpserLab LLC (Apr-Jul 2025): Led backend redesign with Jakarta EE, delivered 15+ optimized APIs (15% performance boost), automated content ingestion system
- LinkedIn Marketing Solutions Consultant (Jul 2021-Jul 2023): Enhanced client outcomes by 21.5%, mentored new hires, collaborated with engineering teams
- Operation Executive at ACE Online (Jul 2020-Jun 2021): Boosted app ratings from 3.0 to 4.5 stars, generated $30K+ in sales, managed hiring for 7 roles

SKILLS:
- Programming Languages: C, Python, Java, JavaScript, HTML/CSS, TypeScript
- Frameworks & Libraries: React.js, Node.js, jQuery, Bootstrap, scikit-learn, TensorFlow, NumPy, Pandas
- Tools & Technologies: MySQL, MongoDB, PostgreSQL, Jenkins, Docker, Kubernetes, AWS, Git

KEY PROJECTS:
- Fraudulent Job Posting Detector: End-to-end ML pipeline with NLP and classification algorithms, solved 5% class imbalance using SMOTE
- Moody AI Wellness App: MERN stack app with emotion-aware recommendations using Hugging Face API, complete with Jest testing and Jira project management
- Full Stack Drawing App: Real-time drawing tool with JWT authentication, containerized with Docker, shipped MVP in 2 weeks
- Fault-Tolerant Key-Value Store: Distributed system using Java, Paxos protocol, and RPC with server failure simulation

ACHIEVEMENTS:
- Published research: "Comparative Study of KNN vs. ANN for Predicting Aluminum Alloy Properties" in Materials Today: Proceedings (Elsevier), June 2023
- Open source contributor: Fixed CSV encoding issue in Preswald ETL tool (Python, DuckDB, TOML)

FORMATTING INSTRUCTIONS:
- Always use clear headers and sections when organizing information
- Use bullet points (•) for lists and key information
- Add line breaks between sections for readability
- Use **bold text** for important terms and technologies
- Structure responses with clear hierarchy: main topics, subtopics, and details
- Keep responses well-organized and scannable
- For technical skills, group them logically (languages, frameworks, tools, etc.)

Answer questions about Monisha's background professionally and enthusiastically. Always format your responses with proper structure, bullet points, and clear sections for excellent readability."""

model = genai.GenerativeModel('gemini-1.5-flash')

class ChatRequest(BaseModel):
    message: str

def format_response(text: str) -> str:
    """
    Enhanced formatting for better readability
    """
    # Preserve markdown formatting but ensure it's clean
    formatted_text = text.strip()

    # Ensure proper spacing after headers
    formatted_text = formatted_text.replace('**\n', '**\n\n')

    # Clean up multiple newlines but preserve intentional spacing
    while '\n\n\n' in formatted_text:
        formatted_text = formatted_text.replace('\n\n\n', '\n\n')

    # Ensure bullet points have consistent formatting
    lines = formatted_text.split('\n')
    formatted_lines = []

    for line in lines:
        line = line.strip()
        if line:
            # Convert various bullet point styles to consistent format
            if line.startswith('- ') or line.startswith('* ') or line.startswith('• '):
                if not line.startswith('• '):
                    line = '• ' + line[2:]
            formatted_lines.append(line)
        else:
            formatted_lines.append('')

    return '\n'.join(formatted_lines)

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    try:
        # Enhanced prompt for better formatting
        context = f"""{SYSTEM_INSTRUCTION}

User Question: {request.message}

Please provide a well-structured response with:
1. Clear headings using **bold text**
2. Organized bullet points using •
3. Proper sections and spacing
4. Technical terms highlighted in **bold**
5. Easy-to-scan format

Response:"""

        response = model.generate_content(context)

        # Format the response for better readability
        formatted_response = format_response(response.text)

        return {"response": formatted_response}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/")
async def root():
    return {"message": "Monisha's Portfolio Chatbot API is running"}

@app.get("/health")
async def health_check():
    try:
        test_response = model.generate_content("Hello")
        return {"status": "healthy", "api_connected": True}
    except Exception as e:
        return {"status": "unhealthy", "error": str(e), "api_connected": False}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)