var express = require('express');
var router = express.Router();

const bios = {
  helicopterson: {
    name: 'Helicopterson dos Santos',
    role: 'Escritor, poeta, sarrador',
    birth: '1870',
    death: '1950',
    background: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum est ut ligula tristique dictum. Donec posuere diam quis ex pulvinar, at consectetur elit fringilla. Quisque non risus lacus. Mauris venenatis urna eget cursus lacinia. Ut enim ex, sollicitudin at placerat ut, posuere non dui. Praesent sit amet nibh dignissim enim tempor posuere. Donec ultrices, sem nec volutpat bibendum, ex ex sagittis urna, eget eleifend tortor elit eget lectus. Phasellus hendrerit, sapien in vulputate scelerisque, tellus ex euismod neque, id facilisis leo ipsum et nisi. In scelerisque, purus vel convallis ullamcorper, dui erat faucibus odio, vitae luctus tortor lorem quis massa. Suspendisse vel risus tortor. Suspendisse ipsum erat, condimentum sit amet erat a, vehicula fringilla ex. Quisque lacus elit, pharetra vel augue in, convallis tempor quam.',
    photo: '/images/helicopterson.png',
    quote: 'Se não for pra voar, eu nem desço pro Play',
    highlights: ['Nasceu', 'Voou', 'Voou mais alto', 'Primeiro homem a pisar na lua', 'Sumiu'],
  },
  lincoln: {
    name: 'Abraham Lincoln',
    role: 'Presidente, advogado',
    birth: '1870',
    death: '1950',
    photo: '/images/lincoln.png',
    background: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum est ut ligula tristique dictum. Donec posuere diam quis ex pulvinar, at consectetur elit fringilla. Quisque non risus lacus. Mauris venenatis urna eget cursus lacinia. Ut enim ex, sollicitudin at placerat ut, posuere non dui. Praesent sit amet nibh dignissim enim tempor posuere. Donec ultrices, sem nec volutpat bibendum, ex ex sagittis urna, eget eleifend tortor elit eget lectus. Phasellus hendrerit, sapien in vulputate scelerisque, tellus ex euismod neque, id facilisis leo ipsum et nisi. In scelerisque, purus vel convallis ullamcorper, dui erat faucibus odio, vitae luctus tortor lorem quis massa. Suspendisse vel risus tortor. Suspendisse ipsum erat, condimentum sit amet erat a, vehicula fringilla ex. Quisque lacus elit, pharetra vel augue in, convallis tempor quam.',
    quote: 'Government of the people, by the people, for the people, shall not perish from the Earth.',
    highlights: ['Destaque 1', 'Destaque 2', 'Destaque 3'],
  },
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {bios: bios});
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.render('bio', bios[id]);
});

module.exports = router;
