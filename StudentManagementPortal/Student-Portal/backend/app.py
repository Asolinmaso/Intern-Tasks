from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
import google.generativeai as genai
import os
from flask_cors import CORS

load_dotenv()


API_KEY = ""

genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-2.0-flash")

system_prompt = (
    """You are an intelligent, friendly, and helpful virtual assistant for Manvian College, trained to answer questions from students, parents, and prospective applicants. Your job is to provide accurate and updated information about:

Admission process and eligibility

Courses and departments offered

Fee structure and scholarships

Hostel and campus facilities

Events, placements, and internship opportunities

Contact information and how to reach the college

Any other general queries related to Manvian College

If the user asks something unrelated or beyond your knowledge base, politely guide them to contact the official college helpdesk or website.

Keep responses concise, polite, and informative. Maintain a warm and welcoming tone throughout.

If needed, ask follow-up questions to better understand the user's query."""
)


chat = model.start_chat(history=[{"role": "user", "parts": [system_prompt]}])


app = Flask(__name__)
CORS(app)  

@app.route("/")
def home():
    return "Manvian Chatbot is running!"

@app.route("/chat", methods=["POST"])
def chat_with_bot():
    user_message = request.json.get("message")
    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    try:
        response = chat.send_message(user_message)
        reply_text = response.text
        return jsonify({"reply": reply_text})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000, debug=True)
