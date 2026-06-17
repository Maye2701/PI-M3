import { describe, it, expect } from "vitest";
import { isEmptyMessage } from "../src/utils.js";


describe("isEmptyMessage", ()=>{
    it("devuelve true cuando el mensaje solo tiene espacios", ()=>{
        expect(isEmptyMessage("   ")).toBe(true);
    })
    it("devuelve true cuando el mensaje está vacío", ()=>{
        expect(isEmptyMessage("")).toBe(true);
    })
    it("devuelve false cuando el mensaje incluye texto", ()=>{
        expect(isEmptyMessage("Hola Tony")).toBe(false);
    })
    it("devuelve false cuando el texto tiene espacios alrededor", ()=>{
        expect(isEmptyMessage("Hola Tony ")).toBe(false);
    })
})
