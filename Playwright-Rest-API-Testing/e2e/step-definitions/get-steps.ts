import { Given } from "@cucumber/cucumber";
import { ScenarioWorld } from "./setup/world";

Given(
    /^I retrieve "([^"]*)"$/,
    async function(this: ScenarioWorld, route: string) {
        const {
            api: { request },
        } = this
        
        const response = await request.get('https://jsonplaceholder.typicode.com/'+route)

        console.log(await response.text())
    }
)