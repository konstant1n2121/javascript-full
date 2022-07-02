const createMessenger = () => {
  // export default createMessenger;
  let message = 'Just learn it';
  let sender = 'Gromcode';
  function sendMessage(name) {
    console.log(`Hello, ${name}! ${message}! This message was sent by ${sender}`);
  }
  function setMessage(text) {
    message = text;
  }
  function setSender(name) {
    sender = name;
  }
  return {
    sendMessage,
    setMessage,
    setSender,
  };
};

const messenger1 = createMessenger();
messenger1.sendMessage('John');

const messenger2 = createMessenger();
messenger2.setMessage('You are learning JS and you do it well');
messenger2.sendMessage('Smith');

const messenger3 = createMessenger();
messenger3.setMessage('The weather is amazing today');
messenger3.setSender('Anna');
messenger3.sendMessage('Alex');
