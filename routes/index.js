var express = require('express');
var router = express.Router();

const bios = {
  avatar: {
    id: 'avatar',
    name: 'Neytiri',
    role: 'Avatar',
    birth: '1272',
    death: 'present',
    background: 'Nativa de uma tribo de avatares, azul sempre foi a cor favorita de Neytiri. Foi justamente porque gostava tanto de azul que por muito tempo quis chegar ao céu e ficar perto de toda aquela imensidão azul. Cresceu com esse sonho e por isso sempre trabalhou muito duro para aprender a voar. Treinou e falhou muito até que finalmente aprendeu. Quando dominou a arte do voô e conseguiu chegar bem alto, ficou decepcionada porque descobriu que o céu não era azul, mas que o vemos azul por umas razões da natureza. Decidiu voltar, estudar muita física para nunca mais errar daquela maneira e assim ganhou seu Nobel de física em 2013.',
    photo: '/images/avatar.png',
    quote: 'Azul da cor do mar? Que nada, isso é só ilusão.',
    highlights: ['Decidiu que queria chegar no céu', 'Aprendeu a voar', 'Começou a estudar física', 'Foi trabalhar no CERN', 'Ganhou Nobel'],
  },
  helicopterson: {
    id: 'helicopterson',
    name: 'Helicopterson dos Santos',
    role: 'Escritor, poeta, filantropo',
    birth: '1870',
    death: '1950',
    background: 'Helicopterson sempre foi um jovem diferenciado, no mundo da lua, com aspirações muito além de sua geração. Com todos os seus sonhos e com muito esforço, um dia aprendeu a voar. Isso, ele aprendeu a voar, fazendo justiça à seu nome tão único. Ele continuou se esforçando, aprendendo muito e dominando a arte do voô, sempre chegando a alturas cada vez maiores. Até que um dia chegou na Lua, e essa na verdade é a última notícia que se tem dele. Depois disso, ele continuou voando cada vez mais alto, e ninguém mais o viu.',
    photo: '/images/helicopterson.png',
    quote: 'Se não for pra voar, eu nem desço pro Play',
    highlights: ['Nasceu', 'Voou', 'Voou mais alto', 'Primeiro homem a pisar na lua', 'Sumiu'],
  },
  lincoln: {
    id: 'lincoln',
    name: 'Abraham Lincoln',
    role: 'Ex-presidente, advogado',
    birth: '1809',
    death: '1865',
    photo: '/images/lincoln.png',
    background: 'Abraham Lincoln foi um político norte-americano que serviu como o 16° presidente dos Estados Unidos, posto que ocupou de 4 de março de 1861 até seu assassinato em 15 de abril de 1865. Lincoln liderou o país de forma bem-sucedida durante sua maior crise interna, a Guerra Civil Americana, preservando a União e abolindo a escravidão, fortalecendo o governo nacional. Lincoln tem sido consistentemente considerado por estudiosos e pelo povo como um dos três maiores presidentes dos Estados Unidos.',
    quote: 'Governo das pessoas, pelas pessoas, para as pessoas, nunca deixará de existir na Terra.',
    highlights: ['Aprovou a Lei da Propriedade Rural', 'Emitiu a Proclamação de Emancipação, que levou à abolição da escravatura nos EUA', 'Liderou a União à vitória da Guerra Civil'],
  },
  musk: {
    id: 'musk',
    name: 'Elon Musk',
    role: 'Empreendedor',
    birth: '1971',
    death: 'present',
    photo: '/images/musk.png',
    background: 'Elon Musk é um empreendedor e empresário norte-americano nascido na África do Sul (ou seja, ele é um cara binacional) e que fundou a PayPal em 1999, a SpaceX em 2002 e a Tesla Motors em 2003. Ou seja, ele é bom. Musk ganhou as manchetes dos jornais em maio de 2012, quando a SpaceX lançou um foguete que enviaria o primeiro veículo comercial para a Estação Espacial Internacional.',
    quote: 'When something is important enough, you do it even if the odds are not in your favor.',
    highlights: ['Fez uma parceria com a NASA', 'Está trabalhando para criar um veículo que ultrapassa a velocidade do som', 'Tem o sonho de mandar pessoas pra Marte', 'Revolucionou o setor de automotivos'],
  },
  hopper: {
    id: 'hopper',
    name: 'Grace Hopper',
    role: 'Cientista da Computação',
    birth: '1906',
    death: '1992',
    photo: '/images/hopper.png',
    background: 'Grace Murray Hopper foi uma analista de sistemas da Marinha dos Estados Unidos nas décadas de 1940 e 1950 e almirante. Foi ela quem criou a linguagem de programação Flow-Matic, hoje extinta. Esta linguagem serviu como base para a criação do COBOL. Ela também foi uma das primeiras programadoras do Harvard Mark I em 1944. É dito que é de autoria de Hopper o termo "bug" usado para designar uma falha num código-fonte. Surgiu quando Grace tentava achar um problema no seu computador. Quando descobriu o problema, ela percebeu que havia um inseto morto no computador. Desde então o termo bug passou a ser usado. Hopper é conhecida como uma das pessoas mais importantes para o mundo da computação.',
    quote: 'Com frequência é mais fácil pedir perdão que pedir por permissão.',
    highlights: ['Juntou-se ao time do Mark I', 'Serviu como diretora do Grupo de Linguages de Programação da Marinha', 'Criou a base do COBOL'],
  },
  zuck: {
    id: 'zuck',
    name: 'Mark Zuckerberg',
    role: 'Empreendedor',
    birth: '1984',
    death: 'present',
    photo: '/images/zuck.png',
    background: 'Mark Zuckerberg é um programador e empresário norte-americano, que ficou conhecido internacionalmente por ser um dos fundadores do Facebook, a rede social mais acessada do mundo. Junto com seus colegas da faculdade da Universidade de Harvard os estudantes Eduardo Saverin, Andrew McCollum, Dustin Moskovitz e Chris Hughes, lançou o Facebook em 2004. O Facebook expandiu-se rapidamente, com um bilhão de usuários até 2012. Zuckerberg foi envolvido em várias disputas legais que foram iniciadas por outros no grupo, que reivindicou uma participação da empresa com base na sua participação durante a fase de desenvolvimento do Facebook.',
    quote: 'Move fast and break things.',
    highlights: ['Largou Harvard para liderar o Facebook', 'Foi eleito Pessoa do Ano pela Forbes', 'Foi à Corte responder sobre a privacidade dos usuários do Fabebook'],
  },
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {bios: bios});
});

/* GET bio page using character id. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.render('bio', bios[id]);
});

module.exports = router;
