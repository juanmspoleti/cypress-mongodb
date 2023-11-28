import { ObjectId } from "mongodb";

describe("Mongodb", () => {
  context("desktop", () => {
    it("can find a result", () => {
      cy.findOne({age: 25}).then(result => {
        cy.log(result.name) // prints the array of documents if any matched, or empty array
    })
    })
  })
})
