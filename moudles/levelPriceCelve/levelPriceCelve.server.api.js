import { axios } from '../../lib/request'
import crypto from 'crypto'
import Qs from 'qs'
import {settings} from '../..//config/dev-setting'
var baseUrl=settings.isTest ? settings.testApiBaseUrl:settings.apiBaseUrl




export const levelPriceCelveApis={}
