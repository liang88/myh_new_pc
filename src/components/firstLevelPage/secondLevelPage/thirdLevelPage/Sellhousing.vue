<template>
  <div id="sellhousing">
    <div class="sellhousing-wap">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <div class="sellhousing-w-dan clear">
          <div class="sellhousing-wd-left">
            所在区域
          </div>
          <div class="sellhousing-wd-right">
            
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'sellhousing',
  components: {
  },
  data () {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
		}
  },
  mounted(){
  },
  methods: {
  },
	//离开当前页面后执行
	destroyed: function () {
	},
}
</script>
<style scoped>

</style>
<style>
</style>