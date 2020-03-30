# tracker-ssr-example

Tracker integration example with server-side rendering

## About

This example demonstrates how to use reactive data sources in Svelte components.
The Svelte component `/components/Person.svelte` displays a name fetched from MongoDB and a state variable.

The computation using `Tracker.autorun()` cannot be performed on the server, therefore the code to use the data source has to be put into `onMount()` of the component.
