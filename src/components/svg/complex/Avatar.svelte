<svelte:options namespace="svg" />

<script lang="ts">
  import SVG from "../SVG.svelte";
  
  export let title: string | undefined = undefined;
  export let size: string | undefined = undefined;
  
  export let crown = false;
  export let glasses = false;  
  export let bangs: "choppy" | "assymetrical" = "choppy";
  export let hair: "blond" | "brunnete" = "blond";  
</script>

<!--
  @component
  
  Profile Avatar SVG component.
  
  Usage:
    ```
      <Avatar crown hair="brunette" size="150px" />
    ```
  
  Props:
  
    | Name    | type                       | default   | description                         |
    |:--------|:---------------------------|:----------|:------------------------------------|
    | title   | string?                    | undefined | The avatar's title                  |
    | size    | string?                    | "1em"     | The avatar's size                   |
    | crown   | boolean?                   | false     | Renders the crown on head           |
    | glasses | boolean?                   | false     | Renders the glasses on a face       |
    | bangs   | "choppy" or "assymetrical" | "choppy"  | Renders the specified type of bangs |
    | hair    | "blond" or "brunette"      | "blond"   | Renders the specified hair color    |
-->
<SVG id="avatar" viewBox="0 0 1024 1024" {size}>
  <g class="avatar-root">
    <defs>
      <linearGradient id="avatar-hair-brunette" x1="520.48" y1="548.56" x2="493.92" y2="27.43" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#6e4b37"/>
        <stop offset="0.96" stop-color="#522a00"/>
      </linearGradient>
      <linearGradient id="avatar-hair-blond" x1="527.1" y1="557.65" x2="527.1" y2="954.57" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#f80"/>
        <stop offset="1" stop-color="#ffcb7d"/>
      </linearGradient>
      <linearGradient id="upper-neck" x1="532.48" y1="-1806.15" x2="532.48" y2="-1906.95" gradientTransform="matrix(1, 0, 0, -1, 0, -1024)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#ffac94"/>
        <stop offset="0.24" stop-color="#ffac94" stop-opacity="0.34"/>
        <stop offset="0.48" stop-color="#ffac94" stop-opacity="0.06"/>
        <stop offset="0.99" stop-color="#ffac94" stop-opacity="0"/>
      </linearGradient>
    </defs>
    {#if title}
      <title>{title}</title>
    {/if}
    <path class="blob" d="M907.08,559.05c-167.19-67.21-203.64,15.7-381.52,9.43-112.81-4-291.75-59.11-403-10.43-108.59,47.52-58,116.46-92,274.48C-1.52,982.05,56.29,916.6,284.78,990.81c129.44,42,387.32,32.14,502.25-9.11C881,948,1031.58,970,996.35,835.23,960.57,698.35,1002.1,597.25,907.08,559.05Z" />
    {#if hair === "blond"}
      <path class="hair-blond" d="M863.23,635.27c-25.76-144.18-27-261.28-27-261.28,0-91.48-69.83-156.57-97.32-176.82-5.57-4.1-20.71-8.94-20.71-8.94S717,165.64,645.4,144.46C596.57,130,513.77,124.64,513.77,124.64c-165.11,0-275.43,96.47-275.43,249.35,0,0-9.67,121.43-32.11,248.89S70.35,804.08,148.58,883.81a239,239,0,0,0,30,25.74c1.92,1.39-.8-35.72,13.69-62.63,15.3-28.41,39.7-56.44,39.7-56.44s-22.57,34.31-31.33,65.91,2,68.84,4.4,70.19c11.52,6.56,43.61,19.77,56.48,25.2,1.32.55-10.19-20.5-14-48.73-3.95-29.42,7.12-51.21,7.12-51.21A116.62,116.62,0,0,0,253,903.05c4.64,23.75,17.79,50.91,19.55,51.55,76.64,28.13,160.38,36.06,264.78,36.06,90.06,0,186.53-11.29,261.2-36.07,1.25-.42,11-25.55,8.27-54.16-3.13-32.27-19-68.43-19-68.43A167.86,167.86,0,0,1,811,886.59c5.92,27.29,2.22,62.83,3.46,62.37,23.41-8.78,44.25-19,61.53-30.82,2.12-1.45,13.6-34.43,8.53-67.22-6.19-40-29.43-81-29.43-81s25.72,26.42,38.32,60.94c10.37,28.39,7.82,66.36,9.7,64.32a100.36,100.36,0,0,0,20.36-31.85C957.93,773.84,887.26,769.87,863.23,635.27Z" />
    {:else}
      <path class="hair-brunnete" d="M839,542c-3.68-26.67-11.66-27.46-22.4-154.71C802.15,216.5,672.75,133.51,526.36,133.51S233.59,240.09,233.59,398.66v81.1c0,44.2-62.61,180.7-69.12,230.16C159.3,749.31,150.39,805.4,180,832.68,195.56,847,324.77,877.2,324.77,877.2s12.47-4,15.12-29.34-1.42-74.34-1.42-74.34,16.38,36.28,20.61,62.57a63,63,0,0,1-10.23,45.18s93.09,28.63,189.84,27.89c92.75-.71,186.57-21.79,190.33-22.81,3.1-.85,6.36-18.73,3.25-39.2-4.52-29.82-17-65.54-17-65.54S732.74,808,743.89,831s5,48.25,5,48.25,18-7,59.49-33.55C811,844,829,811.81,831.22,776.16s-14.09-73.06-14.09-73.06,18.21,17,24.9,46.89S828,838.58,828,838.58s72.41-14.41,75.16-88.55S843.15,572.22,839,542Z" />
    {/if}
    <g class="neck-and-clothes">
      <path class="neck" d="M465.36,718.25H599.61V995.87s-33.56,13.77-67.13,13.77-67.12-13.77-67.12-13.77Z" />
      <path class="ear" d="M295,507.87c40.49.72,19.43,43.83,19.43,70.1,0,0,12.53,26.37,12.58,36.66s-25.89,11.45-25.89,11.45c-27.6,0-70.76-21.2-70.76-63.63C230.34,535.85,254.8,507.15,295,507.87Z" />
      <path class="ear" d="M763.33,516.23c-28.39,2.14-17.18,38.22-17.18,65.18,0,0-12.86,27.07-12.91,37.63s21.38,6.12,21.38,6.12c45,.92,66.82-17.67,69-44.9S813.42,512.46,763.33,516.23Z" />
      <path class="jacket" d="M370.47,872.18c47.44-39.45,94.89-41.65,94.89-41.65v188.75s-51.34-2.51-96.84-9.64a697.13,697.13,0,0,1-85.17-19.26S323,911.63,370.47,872.18Z" />
      <path class="jacket" d="M698,870.27c-49.21-40.91-98.42-43.2-98.42-43.2V1020s54.68-6.46,101.87-13.86,86.9-25,86.9-25S747.24,911.19,698,870.27Z" />
      <path class="blouse-up" d="M465.36,995.75s33.56,13.89,67.12,13.89,67.13-13.89,67.13-13.89v6.19s-33.56,14.53-67.13,14.61-67.12-14.26-67.12-14.26Z" />
      <path class="blouse" d="M465.36,1002.14S498.92,1016,532.48,1016s67.13-14.28,67.13-14.28V1020s-33.56,2.85-67.13,2.94-67.12-3.67-67.12-3.67Z" />
      <path class="neck-up" d="M465.36,737.22s33.56,11.47,67.12,11.47,67.13-10.29,67.13-10.29v66.87S567.76,827,534.2,827.07s-68.84-21.41-68.84-21.41Z" />
    </g>
    {#if bangs == "choppy"}
      <path class="bangs-choppy" d="M686.34,386.22c-1.16-.41.64-13.39-2.06-25.45-2.75-12.25-10-23.58-10-23.58s2.1,15.55,1.86,27.8c-.19,9.79-2.56,16.9-3.55,16.57a583.29,583.29,0,0,0-59.69-16.14c-1.25-.27-.58-10.79-3.17-20.94a124.05,124.05,0,0,0-9.25-23.61A190.3,190.3,0,0,1,602,346c-.22,9.14-2.42,16.75-3.32,16.59a399.77,399.77,0,0,0-69.2-6.79,276.87,276.87,0,0,0-30.45,1.66c-.83.09-3.33-5.64-4-12.1a101.11,101.11,0,0,1,.06-18.07,70.6,70.6,0,0,0-6.14,16.92c-1.37,7,.09,14.47-.67,14.57-14.44,2-28.94,4.84-43,8.11-.85.2-3.95-9.52-5-19.36a190.68,190.68,0,0,1-.51-26.69,138.22,138.22,0,0,0-7.07,27.66c-1.27,10,1.09,21.17.18,21.4-18.63,4.71-36.24,10-51.68,14.69-1,.3-4.05-13.93-3.94-21.42a212.63,212.63,0,0,1,3-29.48s-7.1,13.6-9.62,27c-2.33,12.39.14,25-1.05,25.45C326.34,400.77,313.22,412,313.22,412s.32,37.39.32,54V575.22c0,109.38,90.48,190.18,216,190.18s214.67-66.85,214.67-176.22l4.9-118.45V411.66S728.58,401.05,686.34,386.22Z" style="fill: #ffd8ad;stroke: #230515;stroke-linecap: round;stroke-linejoin: round;stroke-opacity: 0;stroke-width: 2.09999990463257px"/>
    {:else}
      <path class="bangs-assymetrical" d="M726,310.16C700.79,284.84,648.29,255,599.5,255.07c-49.34,0-65.86,86.29-115.56,112.62-64.31,34.07-179,46.54-179,63.92V545.87c0,114.43,94,199,224.3,199s223-69.94,223-184.37l5.09-123.92V377.47S759.31,343.57,726,310.16Z" style="fill: #ffd8ad;stroke: #230515;stroke-linecap: round;stroke-linejoin: round;stroke-opacity: 0;stroke-width: 2.09999990463257px"/>
    {/if}
    <g class="face">
      <path class="eye" d="M629.65,448.88h0c12.53,0,22.7,12.17,22.7,27.19v9.18c0,15-10.17,27.19-22.7,27.19h0c-12.54,0-22.71-12.17-22.71-27.19v-9.18C606.94,461.05,617.11,448.88,629.65,448.88Z" />
      <path class="eye" d="M443.7,448.88h0c12.54,0,22.71,12.17,22.71,27.19v9.18c0,15-10.17,27.19-22.71,27.19h0c-12.53,0-22.7-12.17-22.7-27.19v-9.18C421,461.05,431.17,448.88,443.7,448.88Z" />
      <path class="face-lines" d="M472.31,627.18s26.62,21.3,57.29,24.28S595,639.12,595,639.12" />
      <path class="face-lines" d="M595,398.44s17.86-8.08,35.72-7.58,35.73,9.57,35.73,9.57" />
      <path class="face-lines" d="M410.39,400.43s17.83-9.59,33.31-9.59,28.61,9.59,28.61,9.59" />
      <path class="face-lines" d="M520.2,550.24s11.13,9.11,22.26,9.11,22.27-9.11,22.27-9.11" />
      <path class="face-lines" d="M781.29,599.8s6.09-5.75,14-6.2S812.93,598,812.93,598" />
      <path class="face-lines" d="M300.43,599.8a81.32,81.32,0,0,0-22-5.25,81.52,81.52,0,0,0-22.55,2.14" />
      <path class="blush" d="M390,550.24c0-20.7,13.86-37.49,31-37.49s31,16.79,31,37.49-13.87,37.5-31,37.5S390,571,390,550.24Z" />
      <path class="blush" d="M621.39,550.24c0-20.7,13.86-37.49,31-37.49s31,16.79,31,37.49-13.86,37.5-31,37.5S621.39,571,621.39,550.24Z" />
    </g>
    {#if glasses}
      <g class="glasses">
        <path d="M741.31,433.41A61,61,0,0,1,746,451c1.19,11.88,1.9,28.48-.86,43.12-3.91,20.67-11.9,37.65-25.06,46.72C696.63,557,662,564.32,635.5,561.91c-29.33-2.66-55.1-23-64.4-44.87-13.2-31.12-8.26-79.24-8.26-79.24s-14.16-3.83-25.25-4.41c-12.94-.69-27.7,2.47-27.57,4.41,1.2,17.91,2.25,87.81-30.45,108.48-28,17.68-104.22,22.5-137.55-17.36-10.81-12.93-18.37-37.16-20-63.78-.93-15,3.44-28.76,11.64-38.82,7.82-9.6,26.21-15.95,48.4-19.33,39.95-6.09,84-.92,101.35,2.68C509.6,415.11,510,437.8,510,437.8a127.62,127.62,0,0,1,24.82-2.93c12.13,0,27.85,5.32,27.85,5.32s3.49-20.65,14.53-25.59c41.53-18.58,101-9.13,111.13-7.76,7.8,1.06,46.59,11.13,52.86,26.69" />
        <path d="M296.83,439.67l22.89,3-1.05,35.65L300,466.17a29.79,29.79,0,0,0,.81-11.54C300,448,296.83,439.67,296.83,439.67Z" />
        <path d="M772,436.71l-24.93,3,3.09,35.66,18.71-12.12a29.68,29.68,0,0,1-.8-11.54C768.83,445.05,772,436.71,772,436.71Z" />
      </g>
    {/if}
    {#if crown}
      <path class="crown" d="M736.68,102.05,723.54,19.19,669.35,85.06,649.76.05l-35,150.79s34.14,10.15,65.78,23.93,62,42.25,62,42.25L794.88,37.69Z" />
    {/if}
  </g>
</SVG>

<style>
  .avatar-root {
    --background-blob: #3053ff;
    --skin-tone: #ffd8ad;
    --jacket: #272421;
    --blouse: #fff;
    --blouse-up: #002f5d;
  }
  
  .blob {
    fill: var(--background-blob);
    fill-opacity: 0.7;
  }
  
  .hair-blond {
    fill: url(#avatar-hair-blond);
  }
  
  .hair-brunnete {
    fill: url(#avatar-hair-brunette);
  }

  .crown {
    fill: #f90;
  }
  
  .glasses {
    stroke: #000;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-opacity: 0;
  }
  
  .glasses path:first-child {
    fill: none;
    stroke-width: 6px;
    stroke-opacity: 1;
  }
  
  /* face */
  .eye {
    stroke: #230515;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-opacity: 0;
    stroke-width: 2px;
  }
  
  .face-lines {
    fill: none;
    stroke: #604115;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3.5px;
  }
  
  .blush {
    fill: #ff837a;
  }
  
  /* body */
  .neck,
  .ear {
    fill: var(--skin-tone);
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  
  .neck-up {
    fill: url(#upper-neck);
  }
  
  .jacket {
    fill: var(--jacket);
  }
  
  .blouse {
    fill: var(--blouse);
  }
  
  .blouse-up {
    fill: var(--blouse-up);
  }
</style>