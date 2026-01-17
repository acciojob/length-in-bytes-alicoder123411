const byteSize = (str) => {
	return new TextEncoder().encode(str).length;
  // write your code here
};
const str = prompt("Enter some string.");
alert(byteSize(str));

// Do not change the code below

