import "windi.css";
import "@/assets/styles/index.less";
import { h } from "vue";
import { mount } from "@cypress/vue";
import Accordion from "./Accordion.vue";

describe("Accordion", () => {
  describe("without props", () => {
    it("toggles properly", () => {
      mount(Accordion, {
        slots: {
          title: h("div", { id: "title" }, "Title"),
          default: h("div", { id: "content" }, "Content"),
        },
      });

      cy.get("#title").should("be.visible");
      cy.get("#content").should("not.be.visible");

      cy.get("#title").click();
      cy.get("#content").should("be.visible");

      cy.get("#title").click();
      cy.get("#content").should("not.be.visible");
    });

    it("shows arrow", () => {
      mount(Accordion, {
        slots: {
          title: h("div", { id: "title" }, "Title"),
          default: h("div", { id: "content" }, "Content"),
        },
      });

      cy.get(".icon-inline").should("be.visible");
    });
  });

  describe("with initialVisibility = true", () => {
    it("toggles properly", () => {
      mount(Accordion, {
        slots: {
          title: h("div", { id: "title" }, "Title"),
          default: h("div", { id: "content" }, "Content"),
        },
        props: {
          initialVisibility: true,
        },
      });

      cy.get("#title").should("be.visible");
      cy.get("#content").should("be.visible");

      cy.get("#title").click();
      cy.get("#content").should("not.be.visible");

      cy.get("#title").click();
      cy.get("#content").should("be.visible");
    });
  });

  describe("with initialVisibility = false", () => {
    it("toggles properly", () => {
      mount(Accordion, {
        slots: {
          title: h("div", { id: "title" }, "Title"),
          default: h("div", { id: "content" }, "Content"),
        },
        props: {
          initialVisibility: false,
        },
      });

      cy.get("#title").should("be.visible");
      cy.get("#content").should("not.be.visible");

      cy.get("#title").click();
      cy.get("#content").should("be.visible");

      cy.get("#title").click();
      cy.get("#content").should("not.be.visible");
    });
  });

  describe("with showArrow = true", () => {
    it("shows arrow", () => {
      mount(Accordion, {
        slots: {
          title: h("div", { id: "title" }, "Title"),
          default: h("div", { id: "content" }, "Content"),
        },
        props: {
          showArrow: true,
        },
      });

      cy.get(".icon-inline").should("be.visible");
    });
  });

  describe("with showArrow = false", () => {
    it("doesn't have arrow", () => {
      mount(Accordion, {
        slots: {
          title: h("div", { id: "title" }, "Title"),
          default: h("div", { id: "content" }, "Content"),
        },
        props: {
          showArrow: false,
        },
      });

      cy.get(".icon-inline").should("not.exist");
    });
  });
});
