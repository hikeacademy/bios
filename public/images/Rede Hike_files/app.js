var require = meteorInstall({"client":{"Cabecalho":{"template.Cabecalho.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Cabecalho/template.Cabecalho.js                                                                          //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //

Template.__checkName("Cabecalho");
Template["Cabecalho"] = new Template("Template.Cabecalho", (function() {
  var view = this;
  return HTML.NAV({
    class: "navbar navbar-default"
  }, "\n    ", HTML.DIV({
    class: "container-fluid"
  }, "\n      ", HTML.Raw("<!-- Brand and toggle get grouped for better mobile display -->"), "\n      ", HTML.Raw('<div class="navbar-header">\n        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">\n          <span class="sr-only">Toggle navigation</span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n          <span class="icon-bar"></span>\n        </button>\n        <a class="navbar-brand" href="#">Hike</a>\n      </div>'), "\n\n      ", HTML.Raw("<!-- Collect the nav links, forms, and other content for toggling -->"), "\n      ", HTML.DIV({
    class: "collapse navbar-collapse",
    id: "bs-example-navbar-collapse-1"
  }, "\n        ", HTML.UL({
    class: "nav navbar-nav"
  }, "\n          ", HTML.Raw('<li><a href="/">Início</a></li>'), "\n          ", HTML.Raw('<li><a href="/sobre">Sobre</a></li>'), "\n\n          ", Blaze.If(function() {
    return Spacebars.call(view.lookup("currentUser"));
  }, function() {
    return [ "\n            ", HTML.LI(HTML.A({
      href: "/feed"
    }, "Feed")), "\n          " ];
  }), "\n        "), "\n\n        ", Spacebars.include(view.lookupTemplate("Pesquisa")), "\n\n        ", HTML.UL({
    class: "nav navbar-nav navbar-right"
  }, "\n          ", HTML.LI(Spacebars.include(view.lookupTemplate("atNavButton"))), "\n        "), "        \n      "), HTML.Raw("<!-- /.navbar-collapse -->"), "\n    "), HTML.Raw("<!-- /.cont iner-fluid -->\n  "));
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Pesquisa.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Cabecalho/template.Pesquisa.js                                                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //

Template.__checkName("Pesquisa");
Template["Pesquisa"] = new Template("Template.Pesquisa", (function() {
  var view = this;
  return HTML.Raw('<div class="navbar-form navbar-left">\n    <div class="form-group">\n      <input type="text" class="form-control typeahead" placeholder="Pesquise por amigos..." autocomplete="off" spellcheck="off" data-source="items" data-select="selected">\n    </div>\n  </div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Pesquisa.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Cabecalho/Pesquisa.js                                                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Template.Pesquisa.rendered = function () {
  Meteor.typeahead.inject();
};

Template.Pesquisa.helpers({
  items: function () {
    return Meteor.users.find().fetch().map(function (object) {
      return {
        id: object._id,
        value: object.profile.name
      };
    });
  },
  selected: function (event, suggestion, datasetName) {
    // Redirecionar para página do usuário.
    FlowRouter.go("/perfis/" + suggestion.id);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Comentarios":{"template.Comentario.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Comentarios/template.Comentario.js                                                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //

Template.__checkName("Comentario");
Template["Comentario"] = new Template("Template.Comentario", (function() {
  var view = this;
  return HTML.DIV(HTML.B(Blaze.View("lookup:usernameDoAutor", function() {
    return Spacebars.mustache(view.lookup("usernameDoAutor"));
  })), " ", Blaze.View("lookup:texto", function() {
    return Spacebars.mustache(view.lookup("texto"));
  }));
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.NovoComentario.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Comentarios/template.NovoComentario.js                                                                   //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //

Template.__checkName("NovoComentario");
Template["NovoComentario"] = new Template("Template.NovoComentario", (function() {
  var view = this;
  return HTML.Raw('<form>\n        <div class="row">\n            <div class="col-md-10">\n                <input type="text" class="form-control" name="texto" autocomplete="off">\n            </div>\n            <div class="col-md-2">\n                <button type="submit" class="btn btn-primary">Enviar</button>\n            </div>\n        </div>\n    </form>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Comentarios.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Comentarios/Comentarios.js                                                                               //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Template.Comentario.helpers({
  usernameDoAutor: function () {
    var idDoAutor = this.autor;
    var autor = Meteor.users.findOne({
      _id: idDoAutor
    });
    return autor.username;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NovoComentario.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Comentarios/NovoComentario.js                                                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Template.NovoComentario.events({
  "submit form": function (evento, template) {
    evento.preventDefault();
    var texto = evento.target.texto.value;
    var idDoPost = template.data._id;
    Meteor.call("inserirComentario", texto, idDoPost);
    evento.target.texto.value = "";
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Feed":{"template.Feed.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Feed/template.Feed.js                                                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //

Template.__checkName("Feed");
Template["Feed"] = new Template("Template.Feed", (function() {
  var view = this;
  return HTML.DIV({
    class: "container"
  }, "\n    ", HTML.DIV({
    class: "row"
  }, "\n      ", HTML.DIV({
    class: "col-md-6 col-md-offset-3"
  }, "\n        ", HTML.Raw("<h1>Feed</h1>"), "\n        \n        ", Spacebars.include(view.lookupTemplate("NovoPost")), "\n\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("posts"));
  }, function() {
    return [ "\n          ", Spacebars.include(view.lookupTemplate("Post")), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.NovoPost.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Feed/template.NovoPost.js                                                                                //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //

Template.__checkName("NovoPost");
Template["NovoPost"] = new Template("Template.NovoPost", (function() {
  var view = this;
  return HTML.FORM({
    class: "panel panel-default"
  }, "\n    ", HTML.DIV({
    class: "panel-body"
  }, "\n      ", HTML.DIV({
    class: "form-group"
  }, "\n        ", HTML.TEXTAREA({
    class: "form-control",
    rows: "3",
    name: "texto",
    required: ""
  }), "\n      "), "\n    "), HTML.Raw('\n    <div class="panel-footer">\n      <button type="submit" class="btn btn-primary">Enviar</button>\n    </div>\n  '));
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Post.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Feed/template.Post.js                                                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //

Template.__checkName("Post");
Template["Post"] = new Template("Template.Post", (function() {
  var view = this;
  return HTML.DIV({
    class: "panel panel-default"
  }, "\n    ", HTML.DIV({
    class: "panel-heading"
  }, "\n      ", HTML.H3({
    class: "panel-title"
  }, Blaze.View("lookup:usernameDoAutor", function() {
    return Spacebars.mustache(view.lookup("usernameDoAutor"));
  })), "\n    "), "\n    ", HTML.DIV({
    class: "panel-body"
  }, "\n      ", HTML.DIV(Blaze.View("lookup:texto", function() {
    return Spacebars.mustache(view.lookup("texto"));
  })), "\n\n      ", Blaze.If(function() {
    return Spacebars.call(view.lookup("usuarioCurtiu"));
  }, function() {
    return [ "\n        ", HTML.BUTTON({
      class: "btn btn-default botao-descurtir"
    }, "Descurtir"), "\n      " ];
  }, function() {
    return [ "\n        ", HTML.BUTTON({
      class: "btn btn-default botao-curtir"
    }, "Curtir"), "\n      " ];
  }), "\n\n      ", HTML.DIV(Blaze.View("lookup:numeroDeCurtidas", function() {
    return Spacebars.mustache(view.lookup("numeroDeCurtidas"));
  }), " curtidas"), "\n\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("comentarios"));
  }, function() {
    return [ "\n        ", Spacebars.include(view.lookupTemplate("Comentario")), "\n      " ];
  }), "\n\n      ", Spacebars.include(view.lookupTemplate("NovoComentario")), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Feed.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Feed/Feed.js                                                                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Template.Feed.helpers({
  posts: function () {
    var postsDaCollection = Posts.find().fetch();
    return postsDaCollection;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NovoPost.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Feed/NovoPost.js                                                                                         //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Template.NovoPost.events({
  "submit form": function (evento, template) {
    evento.preventDefault();
    var textoDoFormulario = evento.target.texto.value;
    Meteor.call("inserirPost", textoDoFormulario);
    evento.target.texto.value = "";
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Post.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Feed/Post.js                                                                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Template.Post.helpers({
  usernameDoAutor: function () {
    var idDoAutor = this.idDoAutor;
    var autor = Meteor.users.findOne({
      _id: idDoAutor
    });
    return autor.username;
  },
  numeroDeCurtidas: function () {
    return this.curtidas.length;
  },
  usuarioCurtiu: function () {
    var curtidas = this.curtidas;
    var posicao = curtidas.indexOf(Meteor.userId());

    if (posicao === -1) {
      return false;
    } else {
      return true;
    }
  },
  comentarios: function () {
    return Comentarios.find({
      post: this._id
    }).fetch();
  }
});
Template.Post.events({
  "click .botao-curtir": function (evento, template) {
    Meteor.call("curtirPost", template.data._id);
  },
  "click .botao-descurtir": function (evento, template) {
    Meteor.call("descurtirPost", template.data._id);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Perfil":{"template.Perfil.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Perfil/template.Perfil.js                                                                                //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //

Template.__checkName("Perfil");
Template["Perfil"] = new Template("Template.Perfil", (function() {
  var view = this;
  return HTML.DIV({
    class: "container"
  }, "\n    ", HTML.DIV({
    class: "row"
  }, "\n      ", HTML.DIV({
    class: "col-md-3"
  }, "\n        ", Spacebars.With(function() {
    return Spacebars.call(view.lookup("perfil"));
  }, function() {
    return [ "\n          ", HTML.H1(Blaze.View("lookup:username", function() {
      return Spacebars.mustache(view.lookup("username"));
    })), "\n          ", HTML.H4(Blaze.View("lookup:profile.name", function() {
      return Spacebars.mustache(Spacebars.dot(view.lookup("profile"), "name"));
    })), "\n        " ];
  }), "\n      "), "\n\n      ", HTML.DIV({
    class: "col-md-6"
  }, "\n        ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("posts"));
  }, function() {
    return [ "\n          ", Spacebars.include(view.lookupTemplate("Post")), "\n        " ];
  }), "\n      "), "\n    "), "\n  ");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Perfil.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Perfil/Perfil.js                                                                                         //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Template.Perfil.helpers({
  perfil: function () {
    var idDoUsuario = FlowRouter.getParam("id");
    var info = Meteor.users.findOne({
      _id: idDoUsuario
    });
    return info;
  },
  posts: function () {
    var idDoUsuario = FlowRouter.getParam("id");
    var postsDoPerfil = Posts.find({
      idDoAutor: idDoUsuario
    }).fetch();
    return postsDoPerfil;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"template.Contato.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/template.Contato.js                                                                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //

Template.__checkName("Contato");
Template["Contato"] = new Template("Template.Contato", (function() {
  var view = this;
  return HTML.Raw("<h1>Contato</h1>");
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Inicio.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/template.Inicio.js                                                                                       //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //

Template.__checkName("Inicio");
Template["Inicio"] = new Template("Template.Inicio", (function() {
  var view = this;
  return HTML.Raw('<div class="container">\n    <div class="row">\n      <div class="col-md-6">\n        <div class="jumbotron">\n          <h1>Conecte-se com o mundo.</h1>\n          <p>Veja fotos e status das pessoas que segue.</p>\n          <p>Compartilhe as novidades no seu perfil.</p>\n          <p>Siga seus amigos e pessoas ao redor mundo.</p>\n          <p><a class="btn btn-primary btn-lg" href="#" role="button">Cadastre-se</a></p>\n        </div>\n      </div>\n    </div>\n  </div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.LayoutPrincipal.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/template.LayoutPrincipal.js                                                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //

Template.__checkName("LayoutPrincipal");
Template["LayoutPrincipal"] = new Template("Template.LayoutPrincipal", (function() {
  var view = this;
  return [ Spacebars.include(view.lookupTemplate("Cabecalho")), "\n  ", Blaze._TemplateWith(function() {
    return {
      template: Spacebars.call(view.lookup("main"))
    };
  }, function() {
    return Spacebars.include(function() {
      return Spacebars.call(Template.__dynamic);
    });
  }) ];
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Sobre.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/template.Sobre.js                                                                                        //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //

Template.__checkName("Sobre");
Template["Sobre"] = new Template("Template.Sobre", (function() {
  var view = this;
  return HTML.Raw('<div class="container">\n    <div class="row">\n      <div class="col-md-12">\n        <h1>Sobre</h1>\n      </div> \n    </div> \n\n    <div class="row">\n      <div class="col-md-6">\n        <h2>Nossa Visão</h2>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue leo nibh. Duis varius justo dui, ac malesuada ante condimentum accumsan. Etiam sollicitudin in ex ac fermentum. Proin sed accumsan massa. Morbi risus erat, suscipit non hendrerit in, molestie vel ex. Aenean sed ante nisi. Nulla quis vestibulum nisl.</p>\n      </div>\n\n      <div class="col-md-6">\n        <h2>Nossos valores</h2>\n        <p>Ut scelerisque vestibulum magna, fermentum semper dolor cursus eget. Nullam posuere nisi euismod posuere facilisis. Cras quis arcu ac risus finibus interdum. Vivamus metus tellus, vulputate sed sem vel, rutrum aliquet nibh. Nam id diam consequat, egestas risus eu, sollicitudin leo.</p>\n      </div>\n    </div> \n  </div>');
}));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Accounts.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/Accounts.js                                                                                              //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
T9n.setLanguage("pt");
AccountsTemplates.configure({
  defaultLayoutType: "blaze",
  // Optional, the default is 'blaze'
  defaultLayout: "LayoutPrincipal",
  defaultLayoutRegions: {
    nav: 'Cabecalho'
  },
  defaultContentRegion: "main"
});
AccountsTemplates.configureRoute("signIn");
var pwd = AccountsTemplates.removeField("password");
AccountsTemplates.removeField("email");
AccountsTemplates.addFields([{
  _id: "username",
  type: "text",
  displayName: "username",
  required: true,
  minLength: 3
}, {
  _id: "email",
  type: "email",
  required: true,
  displayName: "email",
  re: /.+@(.+){2,}\.(.+){2,}/,
  errStr: "Invalid email"
}, pwd, {
  _id: "name",
  type: "text",
  displayName: "Nome Completo",
  required: true
}]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/main.js                                                                                                  //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"router.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// lib/router.js                                                                                                   //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
FlowRouter.route("/", {
  action: function (params, queryParams) {
    BlazeLayout.render("LayoutPrincipal", {
      main: "Inicio"
    });
  }
});
FlowRouter.route("/sobre", {
  action: function (params, queryParams) {
    BlazeLayout.render("LayoutPrincipal", {
      main: "Sobre"
    });
  }
});
FlowRouter.route("/feed", {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function (params, queryParams) {
    BlazeLayout.render("LayoutPrincipal", {
      main: "Feed"
    });
  }
});
FlowRouter.route("/perfis/:id", {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function (params, queryParams) {
    BlazeLayout.render("LayoutPrincipal", {
      main: "Perfil"
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"collections":{"Comentarios.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// collections/Comentarios.js                                                                                      //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Comentarios = new Mongo.Collection("comentarios");
Meteor.methods({
  "inserirComentario": function (textoDoComentario, idDoPost) {
    if (Meteor.userId() !== null) {
      Comentarios.insert({
        texto: textoDoComentario,
        post: idDoPost,
        autor: Meteor.userId()
      });
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Posts.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// collections/Posts.js                                                                                            //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
Posts = new Mongo.Collection("posts");
Meteor.methods({
  "inserirPost": function (textoDoFormulario) {
    if (Meteor.userId() !== null) {
      Posts.insert({
        texto: textoDoFormulario,
        idDoAutor: Meteor.userId(),
        curtidas: []
      });
    }
  },
  "curtirPost": function (idDoPost) {
    Posts.update(idDoPost, {
      $addToSet: {
        curtidas: Meteor.userId()
      }
    });
  },
  "descurtirPost": function (idDoPost) {
    Posts.update(idDoPost, {
      $pull: {
        curtidas: Meteor.userId()
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});
require("/client/Cabecalho/template.Cabecalho.js");
require("/client/Cabecalho/template.Pesquisa.js");
require("/client/Comentarios/template.Comentario.js");
require("/client/Comentarios/template.NovoComentario.js");
require("/client/Feed/template.Feed.js");
require("/client/Feed/template.NovoPost.js");
require("/client/Feed/template.Post.js");
require("/client/Perfil/template.Perfil.js");
require("/client/template.Contato.js");
require("/client/template.Inicio.js");
require("/client/template.LayoutPrincipal.js");
require("/client/template.Sobre.js");
require("/lib/router.js");
require("/client/Cabecalho/Pesquisa.js");
require("/client/Comentarios/Comentarios.js");
require("/client/Comentarios/NovoComentario.js");
require("/client/Feed/Feed.js");
require("/client/Feed/NovoPost.js");
require("/client/Feed/Post.js");
require("/client/Perfil/Perfil.js");
require("/client/Accounts.js");
require("/collections/Comentarios.js");
require("/collections/Posts.js");
require("/client/main.js");