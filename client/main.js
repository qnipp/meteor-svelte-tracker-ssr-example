import { onPageLoad } from 'meteor/server-render';
import Person from '/components/Person.svelte';

onPageLoad(() => {
  new Person({
    target: document.getElementById('main'),
    hydrate: true,
  });
});
