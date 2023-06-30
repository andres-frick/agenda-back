# IMPORTAR HERRAMIENTAS
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_marshmallow import Marshmallow

# Crear la app
app = Flask(__name__)

# Usar Cors para dar acceso a las rutas(ebdpoint) desde frontend
CORS(app)

# CONFIGURACIÓN A LA BASE DE DATOS DESDE app
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://AndresFrick:codoacodo@AndresFrick.mysql.pythonanywhere-services.com/AndresFrick$agenda'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False 

# COMUNICAR LA APP CON SQLALCHEMY
db = SQLAlchemy(app)

# PERMITIR LA TRANSFORMACIÓN DE DATOS
ma = Marshmallow(app)

# ESTRUCTURA DE LA TABLA producto A PARTIR DE LA CLASE
class Contacto(db.Model):
    id =db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    direccion = db.Column(db.String(200))
    telefono = db.Column(db.Integer)
    email = db.Column(db.String(200))

    def __init__(self,nombre,direccion,telefono,email):
        self.nombre = nombre
        self.direccion = direccion
        self.telefono = telefono
        self.email = email 


# CÓDIGO PARA CREAR LAS TABLAS DEFINIDAS EN LAS CLASES
with app.app_context():
    db.create_all()

# CREAR UNA CLASE  ProductoSchema, DONDE SE DEFINEN LOS CAMPOS DE LA TABLA
class ContactoSchema(ma.Schema):
    class Meta:
        fields=('id','nombre','direccion','telefono','email')


# DIFERENCIAR CUANDO SE TRANSFORME UN DATO O UNA LISTA DE DATOS
contacto_schema = ContactoSchema()
contactos_schema = ContactoSchema(many=True)


# Manejo de rutas
@app.route("/contactos", methods=['GET'])
def get_contactos():
                    
    all_contactos = Contacto.query.all()
   
    return contactos_schema.jsonify(all_contactos)


@app.route("/contactos", methods=['POST'])
def create_contactos():
    
    nombre = request.json['nombre']
    direccion = request.json['direccion']
    telefono = request.json['telefono']
    email = request.json['email']

    new_contacto = Contacto(nombre, direccion, telefono, email)
    db.session.add(new_contacto)
    db.session.commit()

    return contacto_schema.jsonify(new_contacto)


@app.route("/contactos/<id>", methods=['GET'])
def get_contacto(id):
    contacto = Contacto.query.get(id)

    return contacto_schema.jsonify(contacto)


@app.route('/contactos/<id>',methods=['DELETE'])
def delete_contacto(id):
  
    contacto=Contacto.query.get(id)
   
    db.session.delete(contacto)
    db.session.commit()

    return contacto_schema.jsonify(contacto)
    

@app.route('/contactos/<id>',methods=['PUT'])
def update_contacto(id):
   
    contacto=Contacto.query.get(id)
 
    nombre=request.json['nombre']
    direccion=request.json['direccion']
    telefono=request.json['telefono']
    email=request.json['email']

    contacto.nombre=nombre
    contacto.direccion=direccion
    contacto.telefono=telefono
    contacto.email=email

    db.session.commit()

    return contacto_schema.jsonify(contacto)


if __name__=='__main__':
    app.run(debug=True)