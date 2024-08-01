import subprocess
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def query_ollama(model_name, prompt):
    result = subprocess.run(
        ['ollama', 'run', model_name, prompt],
        capture_output=True,
        text=True
    )
    return result.stdout.strip()

@app.route("/", methods=["GET", "POST"])
def welcome():
    if request.method == "POST":
        task_input = request.form["task_input"]
        return render_template("ai_search.html", task_input=task_input)
    return render_template("index.html")

@app.route("/ai_search", methods=["POST"])
def ai_search():
    task_input = request.form["task_input"]
    model_name = "llama3.1"  # Replace with your model name
    response = query_ollama(model_name, task_input)
    return render_template("ai_search.html", response=response)

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    message = data.get('message')
    model_name = "llama3.1"  # Replace with your model name
    response = query_ollama(model_name, message)
    return jsonify({'response': response})

if __name__ == "__main__":
    app.run(debug=True)
