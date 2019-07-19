import {settings} from "../config/dev-setting";

const {isTest} =settings
const baseUrl= 'mongodb://feooe.changeip.org:17102/'

export default {
    mongoUrl:isTest ? baseUrl + 'bitMexTest' : baseUrl + 'bitMexProduction'
}
