var define_PARSER_NAMES_default=["A2OnlineJudgeProblemParser","A2OnlineJudgeContestParser","ACMPProblemParser","AcWingProblemParser","AizuOnlineJudgeProblemParser","AizuOnlineJudgeBetaProblemParser","AlgotesterProblemParser","AlgoZenithNewProblemParser","AlgoZenithOldProblemParser","AnarchyGolfProblemParser","AtCoderProblemParser","AtCoderContestParser","BaekjoonOnlineJudgeProblemParser","BAPSOJProblemParser","BAPSOJContestParser","BeecrowdProblemParser","BeecrowdContestParser","BloombergCodeConProblemParser","BUCTOJProblemParser","BUCTOJContestParser","CodeChefNewProblemParser","CodeChefOldProblemParser","CodeChefContestParser","CodeDrillsProblemParser","CodeforcesProblemParser","CodeforcesContestParser","CodeMarshalProblemParser","CodeMarshalContestParser","COJProblemParser","COJContestParser","ContestHunterProblemParser","ContestHunterContestParser","CPythonUZProblemParser","CPythonUZContestParser","CSAcademyProblemParser","CSESProblemParser","CSESContestParser","CSUACMOnlineJudgeProblemParser","CSUACMOnlineJudgeContestParser","DimikOJProblemParser","DMOJProblemParser","DMOJContestParser","DOMjudgeContestParser","ECNUOnlineJudgeProblemParser","ECNUOnlineJudgeContestParser","EolympNormalProblemParser","EolympBasecampProblemParser","EolympNormalContestParser","EolympBasecampContestParser","FZUOnlineJudgeProblemParser","FZUOnlineJudgeContestParser","GoogleCodingCompetitionsProblemParser","HackerEarthProblemParser","HackerEarthCodeArenaParser","HackerEarthContestParser","HackerRankProblemParser","HackerRankContestParser","HDOJNewProblemParser","HDOJProblemParser","HDOJNewContestParser","HDOJContestParser","HITOnlineJudgeProblemParser","HihoCoderProblemParser","HihoCoderContestParser","HKOIOnlineJudgeProblemParser","HKOIOnlineJudgeContestParser","HrbustOnlineJudgeProblemParser","HydroProblemParser","HydroContestParser","InfoArenaProblemParser","ITCoderHUTECHProblemParser","JutgeProblemParser","KattisProblemParser","KattisContestParser","KilonovaProblemParser","KilonovaContestParser","LanqiaoProblemParser","LanqiaoContestParser","LibraryCheckerProblemParser","LibraryCheckerOldProblemParser","LibreOJProblemParser","LibreOJContestParser","LightOJProblemParser","LightOJContestParser","LSYOIProblemParser","LuoguProblemParser","LuoguContestParser","MendoProblemParser","MetaCodingCompetitionsProblemParser","MrJudgeProblemParser","MSKInformaticsProblemParser","NBUTOnlineJudgeProblemParser","NBUTOnlineJudgeContestParser","NepsAcademyProblemParser","NewtonSchoolProblemParser","NOJProblemParser","NOJContestParser","NowCoderProblemParser","OmegaUpProblemParser","OpenJudgeProblemParser","OpenJudgeContestParser","OTOGProblemParser","PandaOnlineJudgeProblemParser","PBInfoProblemParser","PEGJudgeProblemParser","PEGJudgeContestParser","POJProblemParser","POJContestParser","PTAProblemParser","QBXTOJProblemParser","QDUOJProblemParser","QDUOJContestParser","QQWhaleProblemParser","RoboContestProblemParser","RoboContestContestParser","SDUTOnlineJudgeProblemParser","SeriousOJProblemParser","SeriousOJContestParser","SortMeProblemParser","SPOJProblemParser","SSOIERProblemParser","TheJobOverflowProblemParser","TimusOnlineJudgeProblemParser","TimusOnlineJudgeContestParser","TLXProblemParser","TLXContestParser","TophProblemParser","UDebugProblemParser","UniversalCupProblemParser","UniversalCupContestParser","UOJProblemParser","UOJContestParser","USACOProblemParser","USACOTrainingProblemParser","UVaOnlineJudgeProblemParser","VirtualJudgeProblemParser","VirtualJudgeContestParser","XXMProblemParser","YandexProblemParser","YandexContestParser","YukicoderProblemParser","YukicoderContestParser","ZOJProblemParser","ZUFEOJProblemParser","ZUFEOJContestParser"];var Node=class{value;next;constructor(value){this.value=value}},Queue=class{#head;#tail;#size;constructor(){this.clear()}enqueue(value){let node=new Node(value);this.#head?(this.#tail.next=node,this.#tail=node):(this.#head=node,this.#tail=node),this.#size++}dequeue(){let current=this.#head;if(current)return this.#head=this.#head.next,this.#size--,current.value}peek(){if(this.#head)return this.#head.value}clear(){this.#head=void 0,this.#tail=void 0,this.#size=0}get size(){return this.#size}*[Symbol.iterator](){let current=this.#head;for(;current;)yield current.value,current=current.next}};function pLimit(concurrency){validateConcurrency(concurrency);let queue=new Queue,activeCount=0,resumeNext=()=>{activeCount<concurrency&&queue.size>0&&(queue.dequeue()(),activeCount++)},next=()=>{activeCount--,resumeNext()},run=async(function_,resolve,arguments_)=>{let result=(async()=>function_(...arguments_))();resolve(result);try{await result}catch{}next()},enqueue=(function_,resolve,arguments_)=>{new Promise(internalResolve=>{queue.enqueue(internalResolve)}).then(run.bind(void 0,function_,resolve,arguments_)),(async()=>(await Promise.resolve(),activeCount<concurrency&&resumeNext()))()},generator=(function_,...arguments_)=>new Promise(resolve=>{enqueue(function_,resolve,arguments_)});return Object.defineProperties(generator,{activeCount:{get:()=>activeCount},pendingCount:{get:()=>queue.size},clearQueue:{value(){queue.clear()}},concurrency:{get:()=>concurrency,set(newConcurrency){validateConcurrency(newConcurrency),concurrency=newConcurrency,queueMicrotask(()=>{for(;activeCount<concurrency&&queue.size>0;)resumeNext()})}}}),generator}function validateConcurrency(concurrency){if(!((Number.isInteger(concurrency)||concurrency===Number.POSITIVE_INFINITY)&&concurrency>0))throw new TypeError("Expected `concurrency` to be a number from 1 and up")}var browser=typeof globalThis.browser<"u"?globalThis.browser:globalThis.chrome;var Config=class{defaults={customPorts:[],customRules:[],requestTimeout:500,debugMode:!1};async get(key){return(await browser.storage.local.get(key))[key]||this.defaults[key]}set(key,value){return browser.storage.local.set({[key]:value})}},config=new Config;var Host=class{async doSend(url,options){let requestTimeout=await config.get("requestTimeout"),abortController=new AbortController;setTimeout(()=>abortController.abort(),requestTimeout);try{await fetch(url,{method:"POST",signal:abortController.signal,...options})}catch{}}};var CHelperHost=class extends Host{async send(data){await this.doSend("http://localhost:4243/",{body:`json
${data}`})}};var CustomHost=class extends Host{constructor(port){super();this.port=port}async send(data){await this.doSend(`http://localhost:${this.port}/`,{body:data,headers:{"Content-Type":"application/json"}})}};var defaultHosts=[new CHelperHost],defaultPorts=[1327,4244,6174,10042,10043,10045,27121];async function getHosts(){let customPorts=await config.get("customPorts"),uniquePorts=[...new Set(defaultPorts.concat(customPorts))];return defaultHosts.concat(uniquePorts.map(port=>new CustomHost(port)))}function noop(){}function sendToContent(tabId,action,payload={}){browser.tabs.sendMessage(tabId,{action,payload}).then(noop).catch(noop)}var version="2.57.1";var requiredPermissions={"https://codingcompetitions.withgoogle.com/":"https://codejam.googleapis.com/dashboard/get_file/*","https://tlx.toki.id/":"https://api.tlx.toki.id/v2/*","https://judge.beecrowd.com/":"https://resources.beecrowd.com/*"},defaultHeaders={"X-Competitive-Companion":version};async function request(url,options={},retries=3){options.headers={...defaultHeaders,...options.headers};let response=await fetch(url,{credentials:"include",...options});if(response.ok&&response.status===200)return response.text();if(retries>0)return await new Promise(resolve=>setTimeout(resolve,2e3-500*retries)),request(url,options,retries-1);throw new Error(`The network response was not ok (status code: ${response.status}, url: ${url}).`)}function createContextMenu(){browser.contextMenus.create({id:"parse-with",title:"Parse with",contexts:["action"]}),browser.contextMenus.create({id:"problem-parser",parentId:"parse-with",title:"Problem parser",contexts:["action"]}),browser.contextMenus.create({id:"contest-parser",parentId:"parse-with",title:"Contest parser",contexts:["action"]});for(let parser of define_PARSER_NAMES_default){let isContestParser=parser.endsWith("ContestParser");browser.contextMenus.create({id:`parse-with-${parser}`,parentId:`${isContestParser?"contest":"problem"}-parser`,title:parser,contexts:["action"]})}}async function loadContentScript(tab,parserName){let permissionOrigins=["http://localhost/"];for(let prefix in requiredPermissions)tab.url.startsWith(prefix)&&permissionOrigins.push(requiredPermissions[prefix]);permissionOrigins.length>0&&await browser.permissions.request({origins:permissionOrigins}),await browser.scripting.executeScript({target:{tabId:tab.id},files:["js/content.js"]}),sendToContent(tab.id,0,{parserName})}function onAction(tab){loadContentScript(tab,null)}function onContextMenu(info,tab){if(info.menuItemId.toString().startsWith("parse-with-")){let parserName=info.menuItemId.toString().split("parse-with-").pop();loadContentScript(tab,parserName)}}async function sendTask(tabId,messageId,data){if(!await browser.permissions.contains({origins:["http://localhost/"]})){sendToContent(tabId,3,{messageId,message:"Competitive Companion does not have permission to send problems to localhost"});return}try{let hosts=await getHosts(),limit=pLimit(6),requests=hosts.map(host=>limit(()=>host.send(data)));try{await Promise.allSettled(requests)}catch{}sendToContent(tabId,2,{messageId})}catch(err){let message=err instanceof Error?err.message:`${err}`;sendToContent(tabId,3,{messageId,message})}}async function makeRequest(tabId,messageId,url,options,retries){if(!await browser.permissions.contains({origins:[url]})){sendToContent(tabId,6,{messageId,message:`Competitive Companion does not have permission to request ${url}`});return}try{let content=await request(url,options,retries);sendToContent(tabId,5,{messageId,content})}catch(err){let message=err instanceof Error?err.message:`${err}`;sendToContent(tabId,6,{messageId,message})}}async function handleMessage(message,sender){sender.tab&&(message.action===1?sendTask(sender.tab.id,message.payload.messageId,message.payload.message):message.action===4&&makeRequest(sender.tab.id,message.payload.messageId,message.payload.url,message.payload.options,message.payload.retries))}browser.action.onClicked.addListener(onAction);browser.contextMenus.onClicked.addListener(onContextMenu);browser.runtime.onMessage.addListener(handleMessage);browser.runtime.onInstalled.addListener(createContextMenu);
