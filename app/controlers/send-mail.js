const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: 'adser247@gmail.com',
        pass: 'paginas000webs'
    }
});

const sendemail = async (req, res)=>{
        try{
            const correo = await transporter.sendMail({
                from: "adser247@gmail.com",
                to: 'diegokemer26@gmail.com',
                subject: "¡¡ATENCION!! Posee un saldo en Maria Grande Repuestos",
                text: "Maria Grande Repuestos",
                html: `Buenos días Diego, nos comunicamos de María Grande Repuestos para  recordarle que Ud. posee una saldo de $mucha, por favor comunicarse a la brevedad.`
            })

            console.log('succefully')
        }catch(err) {console.log(err )}

};

module.exports = {sendemail}