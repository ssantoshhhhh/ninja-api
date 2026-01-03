import { Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  // GET /ninjas --> []
@Get()
getNinjas(@Query('type') type: string){
  return [{type}];
}

// GET /ninjas/:id --> { ... }
@Get(':id')
getOneNinja(@Param(`id`) id: string){
  return {
    id,
  };
}

@Post()
createNinja(){
  return {};
}
@Put(':id')
updateNinja(@Param(`id`) id: string){
  return {};
}
@Delete(':id')
deleteNinja(@Param(`id`) id: string){
  return {};
}

}


// POST /ninjas
// PUT /ninjas/:id -->  { ... }
// DELETE /ninjas/:id 

