#! /usr/bin/env python
from project import app
app.config['host'] = "localhost"
app.config['port'] = 9000
app.run(debug=True,host=app.config['host'],port=app.config['port'])