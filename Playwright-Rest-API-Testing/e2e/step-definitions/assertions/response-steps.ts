import { Then } from '@cucumber/cucumber';
import { ScenarioWorld } from '../setup/world';

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
