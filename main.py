from flask import Flask,render_template,redirect,request
from socket import gethostname,gethostbyname
from json import loads,dumps

app = Flask(__name__)

@app.route('/')
def home_1():
    return redirect("/chat/user")

@app.route('/chat/')
def home_2():
    return redirect("/chat/user")

@app.route('/chat/<path:path>',methods=["GET","POST"])
def index(path):
    print()
    if request.method == "POST":
        return dumps({"response":"Done"})
    else:
        return render_template("index.html")



if "__main__" == __name__:
    app.run(host=gethostbyname(gethostname()),port=80,debug=True)