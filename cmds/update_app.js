module.exports={name:"update",aliases:["update_bot"],type:"messageCreate",code:`$onlyforusers[Sorry but only authorized users can use this command :/;976413539076026388] $!exec[npm update && npm cache clean --force] $updateCommands Successfully updated the following in $parseMS[$executionTime]:\n- NodeJS to $nodeVersion\n- ForgeScript to v$packageVersion\n- DB to v$extensionVersion[ForgeDB]\n- Canvas to v$extensionVersion[ForgeCanvas]\n- Commands count to $commandCount`}