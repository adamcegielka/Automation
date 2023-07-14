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
  async function (
    this: ScenarioWorld,
    successful: boolean,
    unsuccessful: boolean
  ) {
    const { globalAPIResponseVariables } = this;

    console.log(
      `The second response is ${unsuccessful ? 'unsuccessful ' : 'successful '}`
    );

    const response = globalAPIResponseVariables.response;

    if (unsuccessful) {
      expect(response.ok()).toBeFalsy();
    } else {
      expect(response.ok()).toBeTruthy();
    }
  }
);

Then(
  /^The response status code is (\d*)$/,
  async function (this: ScenarioWorld, statusCode: string) {
    const { globalAPIResponseVariables } = this;

    console.log(`The response status code is ${statusCode} `);

    const response = globalAPIResponseVariables.response;

    expect(response.status()).toBe(Number(statusCode));
  }
);
