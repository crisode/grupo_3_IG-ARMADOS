const { sequelize } = require('../database/models');
const db = require('../database/models');
const {Op,Sequelize} = require('sequelize');
const nodemailer = require("nodemailer");


module.exports = {
    index: (req, res) => {

        let destacados=db.Products.findAll({
            include: [
                { association: 'imagenes' },  
                { association: 'categoria' },
            ],
            where : {
                category_id : {
                    [Op.like] : 1
                } 
            },
            order: sequelize.random(),
            limit:4
        })
        let novedades=db.Products.findAll({
            include: [
                { association: 'imagenes' },
                { association: 'categoria' },
            ],
            where : {
                category_id : {
                    [Op.like] : 3
                }
            },
            order: sequelize.random(),

            limit:4
        })
        Promise.all([destacados,novedades])
            .then(([destacados,novedades]) => {
                res.render("index", {
                    title: "IG-Armados",
                    destacados,
                    novedades
                })
            }).catch(error => console.log(error))
    },
    suscripcion: (req, res) => {
        const { email } = req.body;
        /* res.send(req.body.email) */
        let transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: "igarmadostp@gmail.com", // generated ethereal user
            pass: "asdasd123G3", // generated ethereal password
          },
        });
        let mailOption = {
          from: "voyporlomejor@gmail.com",
          to: email,
          subjet: "<span>¡Bienvenido, gracias por suscribirte! 👋</span>",
          html: `

          <tbody>
            
              <tr style="border-collapse:collapse">
                  <td valign="top" style="padding:0; margin:0">
                      <table class="x_es-content" cellspacing="0" cellpadding="0" align="center"
                          style="border-collapse:collapse; border-spacing:0px; table-layout:fixed!important; width:100%; background-color:#000000">
                          <tbody>
                              <tr style="border-collapse:collapse">
                                  <td class="x_es-adaptive" align="center" style="padding:0; margin:0">
                                      <table class="x_es-content-body" cellspacing="0" cellpadding="0" align="center"
                                          style="border-collapse:collapse; border-spacing:0px; width:600px; background-color:#000000">
                                          <tbody>
                                              <tr style="border-collapse:collapse">
                                                  <td align="center" style="padding:10px; margin:0">
                                                      <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                                          align="right"
                                                          style="border-collapse:collapse; border-spacing:0px; background-color:#000000">
                                                          <tbody>
                                                              <tr style="border-collapse:collapse">
                                                                  <td width="50%" align="left" valign="top"
                                                                      style="padding:0; margin:0">
                                                                      <p
                                                                          style="margin:0; font-family:arial,'helvetica neue',helvetica,sans-serif; font-size:10px; text-decoration:none; color:#CCCCCC">
                                                                          Ahora podés encontrar todo lo que buscas en un solo
                                                                          lugar 😉</p>
                                                                  </td>
                                                                  <td align="right" valign="top" style="padding:0; margin:0">
                                                                       
                                                                         
          
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table cellpadding="0" cellspacing="0" width="100%" class="x_stylingblock-content-wrapper"
                          style="background-color:#000000; min-width:100%">
                          <tbody>
                              <tr>
                                  <td class="x_stylingblock-content-wrapper x_camarker-inner" style="padding:0px">
                                      <table class="x_es-header" cellspacing="0" cellpadding="0" align="center"
                                          style="border-collapse:collapse; border-spacing:0px; table-layout:fixed!important; width:100%; background-color:transparent; background-repeat:repeat; background-position:center top">
                                          <tbody>
                                              <tr style="border-collapse:collapse">
                                                  <td align="center" style="padding:0; margin:0">
                                                      <table class="x_es-header-body" cellspacing="0" cellpadding="0"
                                                          align="center"
                                                          style="border-collapse:collapse; border-spacing:0px; background-color:#FFFFFF; width:600px">
                                                          <tbody>
                                                              <tr style="border-collapse:collapse">
                                                                  <td bgcolor="#000000" align="left"
                                                                      style="padding:10px; margin:0; background-color:#000000">
                                                                      <table width="100%" cellspacing="0" cellpadding="0"
                                                                          style="border-collapse:collapse; border-spacing:0px">
                                                                          <tbody>
                                                                              <tr style="border-collapse:collapse">
                                                                                  <td valign="top" align="center"
                                                                                      style="padding:0; margin:0; width:580px">
                                                                                      <table width="100%" cellspacing="0"
                                                                                          cellpadding="0" bgcolor="#000000"
                                                                                          role="presentation"
                                                                                          style="border-collapse:collapse; border-spacing:0px; background-color:#000000">
                                                                                          <tbody>
                                                                                              <tr
                                                                                                  style="border-collapse:collapse">
                                                                                                  <td align="center"
                                                                                                      style="padding:0; margin:0; font-size:0px">
          
                                                                                                  </td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                      </table>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                      <table class="x_es-content" cellspacing="0" cellpadding="0" align="center"
                                          style="border-collapse:collapse; border-spacing:0px; table-layout:fixed!important; width:100%">
                                          <tbody>
                                              <tr style="border-collapse:collapse">
                                                  <td align="center" style="padding:0; margin:0">
                                                      <table class="x_es-content-body" cellspacing="0" cellpadding="0"
                                                          bgcolor="#000000" align="center"
                                                          style="border-collapse:collapse; border-spacing:0px; background-color:#000000; width:600px">
                                                          <tbody>
                                                              <tr style="border-collapse:collapse">
                                                                  <td class="x_es-m-p0" bgcolor="#000000" align="left"
                                                                      style="padding:0; margin:0; padding-top:5px; padding-bottom:5px; background-color:#000000">
                                                                      <table width="100%" cellspacing="0" cellpadding="0"
                                                                          style="border-collapse:collapse; border-spacing:0px">
                                                                          <tbody>
                                                                              <tr style="border-collapse:collapse">
                                                                                  <td valign="top" align="center"
                                                                                      style="padding:0; margin:0; width:600px">
                                                                                      <table width="100%" cellspacing="0"
                                                                                          cellpadding="0" role="presentation"
                                                                                          style="border-collapse:collapse; border-spacing:0px">
                                                                                          <tbody>
                                                                                              <tr
                                                                                                  style="border-collapse:collapse">
                                                                                                  <td style="padding:0; margin:0">
                                                                                                      <table class="x_es-menu"
                                                                                                          width="100%"
                                                                                                          cellspacing="0"
                                                                                                          cellpadding="0"
                                                                                                          role="presentation"
                                                                                                          style="border-collapse:collapse; border-spacing:0px">
                                                                                                          <tbody>
                                                                                                          </tbody>
                                                                                                      </table>
                                                                                                  </td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                      </table>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="x_es-content" cellspacing="0" cellpadding="0" align="center"
                          style="border-collapse:collapse; border-spacing:0px; table-layout:fixed!important; width:100%; background-color:#000000">
                          <tbody>
                              <tr style="border-collapse:collapse"></tr>
                              <tr style="border-collapse:collapse">
                                  <td align="center" style="padding:0; margin:0">
                                      <table class="x_es-content-body" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF"
                                          align="center"
                                          style="border-collapse:collapse; border-spacing:0px; background-color:#FFFFFF; width:600px">
                                          
                                          <h1 style="margin:0; font-size:15px; font-family:arial,'helvetica neue',helvetica,sans-serif; line-height:12px; color:#ff6600 ; background-color:#000000"> Gracias ${email} por registrarte en nuestro sitio!!!! </h1><br>
          
                                          <tbody>
                                              <tr style="border-collapse:collapse">
                                                  <td align="left" style="padding:0; margin:0">
                                                      <table width="100%" cellspacing="0" cellpadding="0"
                                                          style="border-collapse:collapse; border-spacing:0px">
                                                          <tbody>
                                                              <tr style="border-collapse:collapse">
                                                                  <td valign="top" align="center"
                                                                      style="padding:0; margin:0; width:600px">
                                                                      <table width="100%" cellspacing="0" cellpadding="0"
                                                                          role="presentation"
                                                                          style="border-collapse:collapse; border-spacing:0px; background-color:#000000">
                                                                          <tbody>
                                                                              <tr style="border-collapse:collapse">
                                                                                  <td align="center" style="padding:0; margin:0">
                                                                                      <a href="#" target="_blank"
                                                                                          rel="noopener noreferrer"
                                                                                          data-auth="NotApplicable"
                                                                                          style="font-family:arial,'helvetica neue',helvetica,sans-serif; font-size:14px; text-decoration:none; color:#CCCCCC"
                                                                                          data-linkindex="9"><img
                                                                                              data-imagetype="External"
                                                                                              src="https://ig-armados.herokuapp.com/images/slide4.jpg"
                                                                                              class="x_adapt-img" alt="NEWSLETTER"
                                                                                              title="NEWSLETTER" width="100%"
                                                                                              style="display:block; border:0; outline:none; text-decoration:none"></a>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table cellpadding="0" cellspacing="0" width="100%" class="x_stylingblock-content-wrapper"
                          style="background-color:#000000; min-width:100%">
                          <tbody>
                              <tr>
                                  <td class="x_stylingblock-content-wrapper x_camarker-inner" style="padding:0px">
                                      <table class="x_es-content" cellspacing="0" cellpadding="0" align="center"
                                          style="border-collapse:collapse; border-spacing:0px; table-layout:fixed!important; width:100%">
                                          <tbody>
                                              <tr style="border-collapse:collapse"></tr>
                                              <tr style="border-collapse:collapse">
                                                  <td align="center" style="padding:0; margin:0">
                                                      <table class="x_es-content-body" cellspacing="0" cellpadding="0"
                                                          align="center"
                                                          style="border-collapse:collapse; border-spacing:0px; width:600px">
                                                          <tbody>
                                                              <tr>
                                                                  <td rowspan="2" style="background-color:#f1f1f1; width:100%">
                                                                      <table class="x_es-content-body" cellspacing="0"
                                                                          cellpadding="0" align="center"
                                                                          style="border-collapse:collapse; border-spacing:0px; width:100%">
                                                                          <tbody>
                                                                              <tr style="border-collapse:collapse">
                                                                                  <td class="x_es-m-p0t x_es-m-p0b x_es-m-p0r x_es-m-p0l x_esdev-adapt-off"
                                                                                      align="center"
                                                                                      style="margin:0; padding-top:20px; padding-bottom:20px; padding-left:20px; padding-right:20px; background-color:#f1f1f1; min-height:67px!important">
                                                                                      <table class="x_esdev-mso-table"
                                                                                          cellspacing="0" cellpadding="0"
                                                                                          style="border-collapse:collapse; border-spacing:0px; width:100%">
                                                                                          <tbody>
                                                                                              <tr
                                                                                                  style="border-collapse:collapse">
                                                                                                  <td align="center"
                                                                                                      valign="middle"
                                                                                                      class="x_esdev-mso-td"
                                                                                                      width="20%"
                                                                                                      style="padding:0; margin:0">
                                                                                                      <table align="center"
                                                                                                          cellpadding="0"
                                                                                                          cellspacing="0"
                                                                                                          role="presentation"
                                                                                                          style="border-collapse:collapse; border-spacing:0px">
                                                                                                          <tbody>
                                                                                                              <tr
                                                                                                                  style="border-collapse:collapse">
                                                                                                                  <td align="center"
                                                                                                                      style="padding:0; margin:0; font-size:0px">
                                                                                                                      <a href="#"
                                                                                                          
                                                                                                                          rel="noopener noreferrer"
                                                                                                                          data-auth="NotApplicable"
                                                                                                                          data-linkindex="10"><img
                                                                                                                              data-imagetype="External"
                                                                                                                              src="https://image.grupodabra.com/lib/fe37157175640478731176/m/1/29528d7b-e485-4396-930d-b3b47833246a.png"
                                                                                                                              alt="SUCURSALES"
                                                                                                                              title="SUCURSALES"
                                                                                                                              class="x_adapt-img"
                                                                                                                              style="display:block; border:0; outline:none; text-decoration:none"></a>
                                                                                                                  </td>
                                                                                                              </tr>
                                                                                                          </tbody>
                                                                                                      </table>
                                                                                                  </td>
                                                                                                  <td align="center"
                                                                                                      valign="middle"
                                                                                                      class="x_esdev-mso-td"
                                                                                                      width="20%"
                                                                                                      style="padding:0; margin:0">
                                                                                                      <table align="center"
                                                                                                          cellpadding="0"
                                                                                                          cellspacing="0"
                                                                                                          role="presentation"
                                                                                                          style="border-collapse:collapse; border-spacing:0px">
                                                                                                          <tbody>
                                                                                                              <tr
                                                                                                                  style="border-collapse:collapse">
                                                                                                                  <td align="center"
                                                                                                                      style="padding:0; margin:0; font-size:0px">
                                                                                                                      <a href="#"
                                                                                                                          
                                                                                                                          rel="noopener noreferrer"
                                                                                                                          data-auth="NotApplicable"
                                                                                                                          
                                                                                                                          data-linkindex="11"><img
                                                                                                                              data-imagetype="External"
                                                                                                                              src="https://image.grupodabra.com/lib/fe37157175640478731176/m/1/49bbfb81-d4fc-4b2e-85c5-7a91121c2f00.png"
                                                                                                                              alt="CAMBIOS Y DEVOLUCIONES"
                                                                                                                              title="CAMBIOS Y DEVOLUCIONES"
                                                                                                                              class="x_adapt-img"
                                                                                                                              style="display:block; border:0; outline:none; text-decoration:none"></a>
                                                                                                                  </td>
                                                                                                              </tr>
                                                                                                          </tbody>
                                                                                                      </table>
                                                                                                  </td>
                                                                                                  <td align="center"
                                                                                                      valign="middle"
                                                                                                      class="x_esdev-mso-td"
                                                                                                      width="20%"
                                                                                                      style="padding:0; margin:0">
                                                                                                      <table align="center"
                                                                                                          cellpadding="0"
                                                                                                          cellspacing="0"
                                                                                                          role="presentation"
                                                                                                          style="border-collapse:collapse; border-spacing:0px">
                                                                                                          <tbody>
                                                                                                              <tr
                                                                                                                  style="border-collapse:collapse">
                                                                                                                  <td align="center"
                                                                                                                      style="padding:0; margin:0; font-size:0px">
                                                                                                                      <a href=""
                                                                                                                          target="_blank"
                                                                                                                          rel="noopener noreferrer"
                                                                                                                          data-auth="NotApplicable"
                                                                                                                          
                                                                                                                          data-linkindex="12"><img
                                                                                                                              data-imagetype="External"
                                                                                                                              src="https://image.grupodabra.com/lib/fe37157175640478731176/m/1/3db4185c-9ce9-425f-8ad3-9442672881c7.png"
                                                                                                                              alt="PROMOCIONES BANCARIAS"
                                                                                                                              title="PROMOCIONES BANCARIAS"
                                                                                                                              class="x_adapt-img"
                                                                                                                              style="display:block; border:0; outline:none; text-decoration:none"></a>
                                                                                                                  </td>
                                                                                                              </tr>
                                                                                                          </tbody>
                                                                                                      </table>
                                                                                                  </td>
                                                                                                  <td align="center"
                                                                                                      valign="middle"
                                                                                                      class="x_esdev-mso-td"
                                                                                                      width="20%"
                                                                                                      style="padding:0; margin:0">
                                                                                                      <table align="center"
                                                                                                          cellpadding="0"
                                                                                                          cellspacing="0"
                                                                                                          role="presentation"
                                                                                                          style="border-collapse:collapse; border-spacing:0px">
                                                                                                          <tbody>
                                                                                                              <tr
                                                                                                                  style="border-collapse:collapse">
                                                                                                                  <td align="center"
                                                                                                                      style="padding:0; margin:0; font-size:0px">
                                                                                                                      <a href=""
                                                                                                                          
                                                                                                                          rel="noopener noreferrer"
                                                                                                                          data-auth="NotApplicable"
                                                                                                                         
                                                                                                                          data-linkindex="13"><img
                                                                                                                              data-imagetype="External"
                                                                                                                              src="https://image.grupodabra.com/lib/fe37157175640478731176/m/1/07e40b55-ea5f-4acc-b5db-a7cf0c079359.png"
                                                                                                                              alt="ENVIOS"
                                                                                                                              title="ENVIOS"
                                                                                                                              class="x_adapt-img"
                                                                                                                              style="display:block; border:0; outline:none; text-decoration:none"></a>
                                                                                                                  </td>
                                                                                                              </tr>
                                                                                                          </tbody>
                                                                                                      </table>
                                                                                                  </td>
                                                                                                  <td align="center"
                                                                                                      valign="middle"
                                                                                                      class="x_esdev-mso-td"
                                                                                                      width="20%"
                                                                                                      style="padding:0; margin:0">
                                                                                                      <table align="center"
                                                                                                          cellpadding="0"
                                                                                                          cellspacing="0"
                                                                                                          role="presentation"
                                                                                                          style="border-collapse:collapse; border-spacing:0px">
                                                                                                          <tbody>
                                                                                                              <tr
                                                                                                                  style="border-collapse:collapse">
                                                                                                                  <td align="center"
                                                                                                                      style="padding:0; margin:0; font-size:0px">
                                                                                                                      <a href="#"
                                                                                                              
                                                                                                                          rel="noopener noreferrer"
                                                                                                                          data-auth="NotApplicable"
                                                                                                                          data-linkindex="14"><img
                                                                                                                              data-imagetype="External"
                                                                                                                              src="https://image.grupodabra.com/lib/fe37157175640478731176/m/1/1e6647cf-7a47-45c3-909b-3ff0644bfe1a.png"
                                                                                                                              alt="CONTACTOS"
                                                                                                                              title="CONTACTOS"
                                                                                                                              class="x_adapt-img"
                                                                                                                              style="display:block; border:0; outline:none; text-decoration:none"></a>
                                                                                                                  </td>
                                                                                                              </tr>
                                                                                                          </tbody>
                                                                                                      </table>
                                                                                                  </td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                      </table>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                                  <td style="background-color:#FFFFFF"></td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                      <table class="x_es-footer" cellspacing="0" cellpadding="0" align="center"
                                          style="border-collapse:collapse; border-spacing:0px; table-layout:fixed!important; width:100%; background-color:transparent; background-repeat:repeat; background-position:center top">
                                          <tbody>
                                              <tr style="border-collapse:collapse">
                                                  <td align="center" style="padding:0; margin:0">
                                                      <table class="x_es-footer-body" cellspacing="0" cellpadding="0"
                                                          bgcolor="#000000" align="center"
                                                          style="border-collapse:collapse; border-spacing:0px; background-color:#000000; width:600px">
                                                          <tbody>
                                                              <tr style="border-collapse:collapse">
                                                                  <td align="left"
                                                                      style="margin:0; padding-top:20px; padding-bottom:20px; padding-left:20px; padding-right:20px">
                                                                      <table width="100%" cellspacing="0" cellpadding="0"
                                                                          style="border-collapse:collapse; border-spacing:0px">
                                                                          <tbody>
                                                                              <tr style="border-collapse:collapse">
                                                                                  <td valign="top" align="center"
                                                                                      style="padding:0; margin:0; width:560px">
                                                                                      <table width="100%" cellspacing="0"
                                                                                          cellpadding="0" role="presentation"
                                                                                          style="border-collapse:collapse; border-spacing:0px">
                                                                                          <tbody>
                                                                                              <tr
                                                                                                  style="border-collapse:collapse">
                                                                                                  <td align="center"
                                                                                                      style="padding:0; margin:0; padding-top:10px; padding-bottom:10px; font-size:0">
                                                                                                      <table
                                                                                                          class="x_es-table-not-adapt x_es-social"
                                                                                                          cellspacing="0"
                                                                                                          cellpadding="0"
                                                                                                          role="presentation"
                                                                                                          style="border-collapse:collapse; border-spacing:0px">
                                                                                                          <tbody>
                                                                                                              <tr
                                                                                                                  style="border-collapse:collapse">
                                                                                                                  <td valign="top"
                                                                                                                      align="center"
                                                                                                                      style="padding:0; margin:0; padding-right:10px">
                                                                                                                      <a href=""
                                                                                                                          
                                                                                                                          rel="noopener noreferrer"
                                                                                                                          data-auth="NotApplicable"
                                                                                                                          style="font-family:arial,'helvetica neue',helvetica,sans-serif; font-size:10px; text-decoration:none; color:#333333"
                                                                                                                          data-linkindex="15"><img
                                                                                                                              data-imagetype="External"
                                                                                                                              src="https://image.grupodabra.com/lib/fe37157175640478731176/m/1/4d257cfe-f6fd-4979-b3a0-45cbbe2f64b8.png"
                                                                                                                              title="Instagram"
                                                                                                                              alt="INSTAGRAM"
                                                                                                                              width="32"
                                                                                                                              height="32"
                                                                                                                              style="display:block; border:0; outline:none; text-decoration:none"></a>
                                                                                                                  </td>
                                                                                                                  <td valign="top"
                                                                                                                      align="center"
                                                                                                                      style="padding:0; margin:0; padding-right:10px">
                                                                                                                      <a href="#"
                                                                                                                          
                                                                                                                          rel="noopener noreferrer"
                                                                                                                          data-auth="NotApplicable"
                                                                                                                          style="font-family:arial,'helvetica neue',helvetica,sans-serif; font-size:10px; text-decoration:none; color:#333333"
                                                                                                                          data-linkindex="16"><img
                                                                                                                              data-imagetype="External"
                                                                                                                              src="https://image.grupodabra.com/lib/fe37157175640478731176/m/1/fb5f5f00-fe76-4c1b-817b-dfa1d29db39f.png"
                                                                                                                              title="Facebook"
                                                                                                                              alt="FACEBOOK"
                                                                                                                              width="32"
                                                                                                                              height="32"
                                                                                                                              style="display:block; border:0; outline:none; text-decoration:none"></a>
                                                                                                                  </td>
                                                                                                                  <td valign="top"
                                                                                                                      align="center"
                                                                                                                      style="padding:0; margin:0">
                                                                                                                      <a href=""
                                                                                                                          
                                                                                                                          rel="noopener noreferrer"
                                                                                                                          data-auth="NotApplicable"
                                                                                                                          style="font-family:arial,'helvetica neue',helvetica,sans-serif; font-size:10px; text-decoration:none; color:#333333"
                                                                                                                          data-linkindex="17"><img
                                                                                                                              data-imagetype="External"
                                                                                                                              src="https://image.grupodabra.com/lib/fe37157175640478731176/m/1/2b593354-e2fa-4444-89c2-c784007c23d9.png"
                                                                                                                              title="Twitter"
                                                                                                                              alt="TWITTER"
                                                                                                                              width="32"
                                                                                                                              height="32"
                                                                                                                              style="display:block; border:0; outline:none; text-decoration:none"></a>
                                                                                                                  </td>
                                                                                                              </tr>
                                                                                                          </tbody>
                                                                                                      </table>
                                                                                                  </td>
                                                                                              </tr>
                                                                                              <tr
                                                                                                  style="border-collapse:collapse">
                                                                                                  <td align="center"
                                                                                                      style="padding:0; margin:0; padding-top:30px">
                                                                                                      <p
                                                                                                          style="margin:0; font-size:10px; font-family:arial,'helvetica neue',helvetica,sans-serif; line-height:12px; color:#FFFFFF">
                                                                                                          POLÍTICA DE PRIVACIDAD
                                                                                                      </p>
                                                                                                      <p
                                                                                                          style="margin:0; font-size:10px; font-family:arial,'helvetica neue',helvetica,sans-serif; line-height:12px; color:#FFFFFF">
                                                                                                          <br>
                                                                                                      </p>
                                                                                                      <p
                                                                                                          style="margin:0; font-size:10px; font-family:arial,'helvetica neue',helvetica,sans-serif; line-height:12px; color:#FFFFFF">
                                                                                                          Este email es de
                                                                                                          carácter informativo. No
                                                                                                          significa que estés
                                                                                                          comprando o que hayas
                                                                                                          hecho alguna reserva. Si
                                                                                                          encontraras alguna
                                                                                                          diferencia entre la
                                                                                                          información de producto
                                                                                                          presente en el sitio y
                                                                                                          la información
                                                                                                          proporcionada en este
                                                                                                          email, la correcta es la
                                                                                                          que esté publicada en Ig-Armados
                                                                                                          </a>al momento de
                                                                                                          finalizar tu compra.
                                                                                                          <br>En virtud de lo
                                                                                                          establecido por la
                                                                                                          disposición de
                                                                                                          Protección de Datos
                                                                                                          Personales usted tiene
                                                                                                          derecho a solicitar al
                                                                                                          emisor de este mensaje
                                                                                                          la rectificación,
                                                                                                          actualización, inclusión
                                                                                                          o supresión de los datos
                                                                                                          personales incluidos en
                                                                                                          su base de contactos,
                                                                                                          listas o cadenas de
                                                                                                          mensajes en los cuales
                                                                                                          usted se encuentre.<br>
                                                                                                      </p>
                                                                                                      <p
                                                                                                          style="margin:0; font-size:10px; font-family:arial,'helvetica neue',helvetica,sans-serif; line-height:12px; color:#FFFFFF">
                                                                                                          <br>
                                                                                                      </p>
                                                                                                      <p
                                                                                                          style="margin:0; font-size:10px; font-family:arial,'helvetica neue',helvetica,sans-serif; line-height:12px; color:#FFFFFF">
                                                                                                         
                                                                                                      <p
                                                                                                          style="margin:0; font-size:10px; font-family:arial,'helvetica neue',helvetica,sans-serif; line-height:12px; color:#FFFFFF">
                                                                                                          <br>
                                                                                                      </p>
                                                                                                      <p
                                                                                                          style="margin:0; font-size:10px; font-family:arial,'helvetica neue',helvetica,sans-serif; line-height:12px; color:#FFFFFF">
                                                                                                          Las presentes
                                                                                                          disposiciones generales
                                                                                                          serán aplicables y
                                                                                                          regirán para poder
                                                                                                          operar en el sitio y/o
                                                                                                          bien, hacer uso de los
                                                                                                          servicios que se ofrecen
                                                                                                          en Ig-Armados.
                                                                                                          </p><br>
                                                                                                          <p style="margin:0; font-size:15px; font-family:arial,'helvetica neue',helvetica,sans-serif; line-height:12px; color:#FFFFFF">
                                                                                                              
                                                                                                              Derechos reservados al GRUPO 3 <br><br>
                                                                                                              Comisión 4 <br><br>
                                                                                      
                                                                                                          </p>
                                                                                                          <p style="margin:0; font-size:15px; font-family:arial,'helvetica neue',helvetica,sans-serif; line-height:12px; color:#FFFFFF">
                                                                                                              IG-ARMADOS S.A
          
                                                                                                          </p>
                                                                                                  </td>
                                                                                              </tr>
                                                                                          </tbody>
                                                                                      </table>
                                                                                  </td>
                                                                              </tr>
                                                                          </tbody>
                                                                      </table>
                                                                  </td>
                                                              </tr>
                                                          </tbody>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <div style="width:100%"></div><img data-imagetype="External"
                          src="https://click.grupodabra.com/open.aspx?ffcb10-fec6157676650c7b-fe2616797765037b701578-fe37157175640478731176-ff2910787061-fe5e13737560047a761d-ffce15&amp;d=110002&amp;bmt=0"
                          width="1" height="1" alt="">
                  </td>
              </tr>
          </tbody>`,
        };
        transporter.sendMail(mailOption, (error, info) => {
          if (error) {
            res.send(error);
          } else {
            res.redirect("/")          }
        });
        
      },
    contact: (req, res) => {
        res.render("contacto", {
            title: "Contacto",
        })
    }


}


