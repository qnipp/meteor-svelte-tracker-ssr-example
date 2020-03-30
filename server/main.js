import { Meteor } from "meteor/meteor";

import { onPageLoad } from "meteor/server-render";
import Persons from "/lib/Persons.js";
import Person from "/components/Person.svelte";

Meteor.startup(() => {
  if (Persons.find().count() < 1) {
    Persons.insert({
      name: "Meteor developer"
    });
  }
});

onPageLoad(sink => {
  const { html, css } = Person.render();

  sink.appendToHead(`<style>${css.code}</style>`);
  sink.renderIntoElementById("main", html);
});