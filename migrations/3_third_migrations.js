const MissingDiaries = artifacts.require("MissingDiaries");

module.exports = function (deployer) {
    
 deployer.deploy(MissingDiaries);
};