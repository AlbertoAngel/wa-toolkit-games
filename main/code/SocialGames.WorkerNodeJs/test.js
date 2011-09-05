var net = require('net');

var host = 'socialgames-nodejs.cloudapp.net';
var port = 8124;

var smallCommand = {"name":"command","args":[{"Type":12,"CommandData":{"damage":"0,0"}}]};
var bigCommand = {"name":"command","args":[{"Type":12,"CommandData":{"damage":"0,0","terrain":"323,323,323,323,323,323,323,322,322,322,322,322,322,322,322,321,321,321,321,321,321,320,320,320,320,319,319,319,319,318,318,318,318,317,317,317,316,316,316,315,315,315,314,314,314,313,313,313,312,312,311,311,311,310,310,309,309,308,308,308,307,307,306,306,305,305,304,304,303,303,302,302,301,301,300,300,299,299,298,297,297,296,296,295,295,294,294,293,292,292,291,291,290,290,289,288,288,287,287,286,285,285,284,284,283,282,282,281,281,280,280,279,278,278,277,277,276,275,275,274,274,273,273,272,271,271,270,270,269,269,268,267,267,266,266,265,265,264,264,263,263,262,262,261,261,260,260,259,259,258,258,257,257,256,256,256,255,255,254,254,253,253,253,252,252,252,251,251,251,250,250,250,249,249,249,248,248,248,247,247,247,247,246,246,246,246,246,245,245,245,245,245,244,244,244,244,244,244,244,244,244,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,243,244,244,244,244,244,244,244,244,245,245,245,245,245,245,246,246,246,246,247,247,247,247,248,248,248,248,249,249,249,250,250,250,251,251,251,252,252,252,253,253,254,254,254,255,255,256,256,257,257,257,258,258,259,259,260,260,261,261,262,262,263,263,264,264,265,265,266,266,267,267,268,269,269,270,270,271,271,272,272,273,274,274,275,275,276,276,277,278,278,279,279,280,281,281,282,282,283,284,284,285,285,286,287,287,288,288,289,289,290,291,291,292,292,293,294,294,295,295,296,296,297,298,298,299,299,300,300,301,301,302,303,303,304,304,305,305,306,306,307,307,308,308,309,309,310,310,311,311,312,312,313,313,314,314,314,315,315,316,316,317,317,317,318,318,319,319,319,320,320,321,321,321,322,322,322,323,323,323,324,324,324,325,325,325,326,326,326,326,327,327,327,328,328,328,328,328,329,329,329,329,330,330,330,330,330,331,331,331,331,331,331,332,332,332,332,332,332,332,333,333,333,333,333,333,333,333,333,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,334,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,335,336,336,336,336,336,336,336,336,336,336,336,336,336,336,337,337,337,337,337,337,337,337,337,338,338,338,338,338,338,338,339,339,339,339,339,339,340,340,340,340,340,341,341,341,341,342,342,342,342,342,343,343,343,343,344,344,344,345,345,345,345,346,346,346,347,347,347,348,348,348,349,349,349,350,350,350,351,351,352,352,352,353,353,354,354,354,355,355,356,356,356,357,357,358,358,359,359,360,360,361,361,361,362,362,363,363,364,372,379,385,386,388,389,390,391,391,392,393,393,393,394,394,394,395,395,395,395,395,395,395,395,394,394,394,393,393,393,392,391,391,390,389,388,386,385,384,385,386,386,387,387,388,388,389,389,390,390,391,392,392,393,393,394,394,395,395,396,396,397,398,398,399,399,400,400,401,401,402,402,403,403,404,404,405,405,406,406,407,407,408,408,409,409,410,410,411,411,412,412,413,413,413,414,414,415,415,416,416,417,417,417,418,418,419,419,419,420,420,421,421,421,422,422,422,423,423,424,424,424,425,425,425,426,426,426,427,427,427,427,428,428,428,429,429,429,429,430,430,430,430,431,431,431,431,432,432,432,432,432,433,433,433,433,433,434,434,434,434,434,434,435,435,435,435,435,435,435,436,436,436,436,436,436,436,436,436,436,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,438,438,438,438,438,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,437,436,436,436,436,436,436,436,436,436,436,436,436,436,436,435,435,435,435,435,435,435,435,435,435,435,435,434,434,434,434,434,434,434,434,434,434,434,434,433,433,433,433,433,433,433,433,433,433,433,432,432,432,432,432,432,432,432,432,432,432,432,432,431,431,431,431,431,431,431,431,431,431,431,431,431,430,430,430,430,430,430,430,430,430,430,430,430,430,430,430,435,438,441,442,444,445,446,447,447,448,449,449,449,450,450,450,451,451,451,451,451,451,451,451,450,450,450,449,449,449,448,447,447,446,445,444,442,441,438,439,441,442,443,444,444,445,446,446,446,447,447,447,448,448,448,448,448,448,448,448,447,447,447,446,446,446,445,446,446,446,447,447,447,448,448,448,448,448,448,448,448,447,447,447,446,446,446,445,444,444,443,442,441,439,438,435,432,424,424,424,423,423,423,423,423,423,423,423,423,422,422,422,422,422,422,422,422,421,421,421,421,421,421,421,420,420,420,420,420,420,419,419,419,419,419,419,418,418,418,418,418,418,417,417,417,417,417,416,416,416,416,415,415,415,415,415,414,414,414,414,413,413,413,413,413,412,412,412,412,411,411,411,411,410,410,410,410,409,409,409,408,408,408,408,407,407,407,406,406,406,406,405,405,405,404,404,404,404,403,403,403,402,402,402,401,401,401,401,400,400,400,399,399,399,398,398,398,397,397,397,396,396,396,395,395,395,394,394,394,393,393,393,392,392,392,392,391,391,391,390,390,390,389,389,389,388,388,388,387,387,387,386,386,386,385,385,385,384,384,384,383,383,383,382,382,382,381,381,381,380,380,380,379,379,379,378,378,378,377,377,377,377,376,376,376,375,375,375,374,374,374,373,373,373,373,372,372,372,371,371,371,370,370,370,370,369,369,369,368,368,368,368,367,367,367,366,366,366,366,365,365,365,364,364,364,364,363,363,363,363,362,362,362,361,361,361,361,360,360,360,360,359,359,359,359,358,358,358,358,357,357,357,357,356,356,356,355,355,355,355,354,354,354,354,353,353,353,353,352,352,352,352,351,351,351,351,350,350,350,350,349,349,349,349,348,348,348,348,347,347,347,347,346,346,346,345,345,345,345,344,344,344,344,343,343,343,343,342,342,342,341,341,341,341,340,340,340,339,339,339,339,338,338,338,337,337,337,336,336,336,336,335,335,335,334,334,334,333,333,333,332,332,332,331,331,331,330,330,330,329,329,329,328,328,328,327,327,327,326,326,326,325,325,325,324,324,324,323,323,322,322,322,321,321,321,320,320,319,319,319,318,318,318,317,317,316,316,316,315,315,314,314,314,313,313,312,312,312,311,311,311,310,310,309,309,309,308,308,307,307,307,306,306,305,305,304,304,304,303,303,302,302,302,301,301,300,300,300,299,299,299,298,298,297,297,297,296,296,295,295,295,294","id":0,"uuid":"id_9.07803885283642E+307"}}]};

// ----

var writeSocket = net.Socket();
writeSocket.connect(port, host, function() {
  var joinMsg = {"name":"join","args":["testroom"]};
  writeSocket.write(JSON.stringify(joinMsg) + "\r\n", 'ascii', function() {

    // create another socket and join it to the room as well
    var readSocket = net.Socket();
    readSocket.connect(port, host, function() {
		var state = null;
      readSocket.on('data', function(buffer) {
		var data = buffer.toString('ascii');
		var len = data.length;
        console.log('received', len, 'bytes');
		
        var isEmpty = /^\s*$/;
        var parts = data.split("\n");
        len = parts.length;
		
		if (len>0 && state != null) {
			parts[0] = state + parts[0];
			state = null;
		}
		
		if (len>0 && data.length > 0 && data[data.length-1] !== '\n') {
			state = parts[len-1];
			parts[len-1] = '';
		}
		
        for (var i=0; i<len; i++) {
            // ignore empty strings
            if (isEmpty.test(parts[i])) { continue; }
            var message = null;

            try {
                message = JSON.parse(parts[i]);
				console.log("Message OK");
            }
            catch (err) {
                console.log("Error Processing Data", err, parts[i]);
                continue;
            }
		}
      });

      readSocket.write(JSON.stringify(joinMsg) + "\r\n", 'ascii', function() {

        // back on the first socket, write some stuff
        // send a small command
        writeSocket.write(JSON.stringify(smallCommand) + "\r\n", 'ascii', function() {
          console.log('small command sent');
        });

        // send a big command
        writeSocket.write(JSON.stringify(bigCommand) + "\r\n", 'ascii', function() {
          console.log('big command sent');
        });
      });
    });
  });
});
