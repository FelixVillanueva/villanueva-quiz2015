module.exports = function(sequlize, DataTypes){
    return sequlize.define('Quiz',
			   {rpegunta: DataTypes.STRING,
			    respuesta: DataTypes.STRING,
			   });
}
