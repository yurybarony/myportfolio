const express = require("express");
const repositorie = require("./repositorie.json");

const app = express();
const lang = 'en';
const optionsLang = ['pt-br','en','es'];

app.set("view engine", "pug");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  this.lang = req.query !== undefined ? optionsLang.includes(req.query.lang) ? req.query.lang : lang : lang;
  res.render("index", {
    lang: repositorie[this.lang].lang,
    langTitle: repositorie[this.lang].langTitle,
    title: repositorie[this.lang].title,
    header: repositorie[this.lang].menu.header,
    skills: repositorie[this.lang].skills,
    sections: repositorie[this.lang].sections,
    profile: repositorie[this.lang].profiles,
    companies: repositorie[this.lang].companies,
    testmonials: repositorie[this.lang].testmonials,
    timeline: repositorie[this.lang].timeline,
    timeline_section_text: repositorie[this.lang].timeline_section_text,
    timeline_finish_text: repositorie[this.lang].timeline_finish_text,
    timeline_phrase_contact: repositorie[this.lang].timeline_phrase_contact,
    timeline_button_contact: repositorie[this.lang].timeline_button_contact,
    footer: repositorie[this.lang].menu.footer
  });
});

app.get("/terms", (req, res) => {
  this.lang = req.query !== undefined ? optionsLang.includes(req.query.lang) ? req.query.lang : lang : lang;
  res.render("index", {
    lang: repositorie[this.lang].lang,
    langTitle: repositorie[this.lang].langTitle,
    title: repositorie[this.lang].title,
    header: repositorie[this.lang].menu.header,
    skills: repositorie[this.lang].skills,
    sections: repositorie[this.lang].sections,
    profile: repositorie[this.lang].profiles,
    companies: repositorie[this.lang].companies,
    testmonials: repositorie[this.lang].testmonials,
    timeline: repositorie[this.lang].timeline,
    timeline_section_text: repositorie[this.lang].timeline_section_text,
    timeline_finish_text: repositorie[this.lang].timeline_finish_text,
    timeline_phrase_contact: repositorie[this.lang].timeline_phrase_contact,
    timeline_button_contact: repositorie[this.lang].timeline_button_contact,
    footer: repositorie[this.lang].menu.footer
  });
});

app.get("/privacy", (req, res) => {
  this.lang = req.query !== undefined ? optionsLang.includes(req.query.lang) ? req.query.lang : lang : lang;
  res.render("privacy", {
    lang: repositorie[this.lang].lang,
    langTitle: repositorie[this.lang].langTitle,
    title: repositorie[this.lang].title,
    header: repositorie[this.lang].menu.header,
    skills: repositorie[this.lang].skills,
    sections: repositorie[this.lang].sections,
    profile: repositorie[this.lang].profiles,
    companies: repositorie[this.lang].companies,
    testmonials: repositorie[this.lang].testmonials,
    timeline: repositorie[this.lang].timeline,
    timeline_section_text: repositorie[this.lang].timeline_section_text,
    timeline_finish_text: repositorie[this.lang].timeline_finish_text,
    timeline_phrase_contact: repositorie[this.lang].timeline_phrase_contact,
    timeline_button_contact: repositorie[this.lang].timeline_button_contact,
    footer: repositorie[this.lang].menu.footer
  });
});

app.get("/license", (req, res) => {
  this.lang = req.query !== undefined ? optionsLang.includes(req.query.lang) ? req.query.lang : lang : lang;
  res.render("license", {
    lang: repositorie[this.lang].lang,
    langTitle: repositorie[this.lang].langTitle,
    title: repositorie[this.lang].title,
    header: repositorie[this.lang].menu.header,
    skills: repositorie[this.lang].skills,
    sections: repositorie[this.lang].sections,
    profile: repositorie[this.lang].profiles,
    companies: repositorie[this.lang].companies,
    testmonials: repositorie[this.lang].testmonials,
    timeline: repositorie[this.lang].timeline,
    timeline_section_text: repositorie[this.lang].timeline_section_text,
    timeline_finish_text: repositorie[this.lang].timeline_finish_text,
    timeline_phrase_contact: repositorie[this.lang].timeline_phrase_contact,
    timeline_button_contact: repositorie[this.lang].timeline_button_contact,
    footer: repositorie[this.lang].menu.footer
  });
});

app.use(function(req, res, next) {
  this.lang = req.query !== undefined ? optionsLang.includes(req.query.lang) ? req.query.lang : lang : lang;
  res.status(404).render("404",{
    lang: repositorie[this.lang].lang,
    langTitle: repositorie[this.lang].langTitle,
    title: repositorie[this.lang].title,
    header: repositorie[this.lang].menu.header,
    profile: repositorie[this.lang].profiles,
    footer: repositorie[this.lang].menu.footer
  });
});

var porta = process.env.PORT_APP || 21018;

const server = app.listen(porta, () => {
  console.log(`Yupi! Portfolio are running in port ${server.address().port}`);
});
