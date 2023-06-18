import { Then } from '@cucumber/cucumber';
import { ScenarioWorld } from '../setup/world';
import { expect } from '@playwright/test';

Then(
  /^The response was (successful)?(unsuccessful)?$/,
  async function (
    this: ScenarioWorld,
    successful: boolean,
    unsuccessful: boolean
  ) {
    const { globalAPIResponseVariables } = this;

    console.log(await globalAPIResponseVariables.response.text());
  }
);

Then(
  /^The second response is (successful)?(unsuccessful)?$/,
  async function (this: ScenarioWorld, successful: boolean, unsuccessful: boolean) {
    const {
        globalAPIResponseVariables
    } = this;

    console.log(`The second response is ${unsuccessful? 'unsuccessful ' : 'successful '}`);

    const response = globalAPIResponseVariables.response;

    if (unsuccessful) {
      expect(response.ok()).toBeFalsy();
    } else {
      expect(response.ok()).toBeTruthy();
    }
  }
);
