function convertToBinary(fileObj) {
	fileObj.encoding = "BINARY";
	fileObj.open('r');
	var fileData = fileObj.read();
		fileObj.close();
	var binaryString = fileData.toSource();

		binaryString = binaryString.replace(/^\(new String\(/, "[");
		binaryString = binaryString.replace(/\)\)$/, "];");

	return "var myBin = " + binaryString;
}
