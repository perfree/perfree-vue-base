<template>
  <div>test</div>
  <div ref="markdownContainer" style="height: 600px;width: 100%"></div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import 'cherry-markdown/dist/cherry-markdown.css';
import Cherry from 'cherry-markdown/dist/cherry-markdown.core';

let cherryInstance =  null;
const markdownContainer = ref();

onMounted(() => {
  cherryInstance =  new Cherry({
    el: markdownContainer.value,
    value: '写点什么?',
    forceAppend: false,
    engine: {
      global: {
        classicBr: true,
      },
      syntax: {
        table: {
          enableChart: false,
        },
      }
    },
    toolbars: {
      // 定义顶部工具栏
      toolbar: ['undo', 'redo', '|',
        'header',
        {bold:['bold', 'italic', 'underline','hr', 'br', 'strikethrough']},
        'justify','quote',
        'list', 'link', 'code','table'
      ],
      // 定义侧边栏，默认为空
      sidebar: ['theme', 'mobilePreview', 'copy'],
      // 定义顶部右侧工具栏，默认为空
      toolbarRight: ['fullScreen', 'export'],
      // 定义选中文字时弹出的“悬浮工具栏”，默认为 ['bold', 'italic', 'underline', 'strikethrough', 'sub', 'sup', 'quote', '|', 'size', 'color']
      bubble: ['bold', 'italic', 'underline', 'strikethrough', 'quote'],
      // 定义光标出现在行首位置时出现的“提示工具栏”，默认为 ['h1', 'h2', 'h3', '|', 'checklist', 'quote', 'table', 'code']
      float: ['h1', 'h2', 'h3', '|', 'checklist', 'quote', 'table', 'code'],
    },
    previewer: {
      enablePreviewerBubble: false,
    }
  });
})

</script>