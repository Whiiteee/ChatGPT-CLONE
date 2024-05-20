from flask import Flask,render_template,redirect

app = Flask(__name__)

@app.route('/')
def home():
    return redirect("/chat")

@app.route('/chat')
def index():
    return render_template("index.html")

if "__main__" == __name__:
    app.run(port=80,debug=True)