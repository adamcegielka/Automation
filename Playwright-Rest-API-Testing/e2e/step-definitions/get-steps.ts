import { Given } from '@cucumber/cucumber';
import { ScenarioWorld } from './setup/world';

Given(
  /^I retrieve "([^"]*)"$/,
  async function (this: ScenarioWorld, route: string) {
    const {
      api: { request },
      globalAPIResponseVariables,
    } = this;

    console.log(`I retrieve ${route}`);

    const response = await request.get(
      'https://jsonplaceholder.typicode.com/' + route
    );

    globalAPIResponseVariables.response = response;
  }
);
