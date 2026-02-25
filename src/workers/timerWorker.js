let isRunning = false;

self.onmessage = function (event) {
  if(isRunning) return;

  isRunning= true;

  const state =event.data;
  const {activeTask,secondsRemaining} = state;

const endDate = activeTask.startDate +  secondsRemaining * 1000;
 const now = Date.now()
let countDownSeconds = Math.ceil((endDate - now) / 1000)

function tick() {
  self.postMessage(countDownSeconds)

  const now = Date.now();
  countDownSeconds = Math.floor((endDate - now) / 1000);

  setTimeout(tick, 1000);
}

tick();
}

// console.log('WORKER recebeu:', event.data)

// switch (event.data) {
//   case 'Favor': {
//     self.postMessage('Sim, posso fazer um favor')
//     break
//   }
//   case 'Fala_Oi': {
//     self.postMessage('Ok: Oi!')
//     break
//   }
//   case 'Fechar': {
//     self.postMessage('Tá bom, vou fechar')
//     self.close()
//     break
//   }
//   default:
//     self.postMessage('Não entendi')
// }