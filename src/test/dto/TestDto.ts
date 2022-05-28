import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator'

export class TestDto {
  @ApiModelProperty({ description: '姓名' })
  name: string
  @ApiModelProperty({ description: '年龄' })
  age: number
}
