# Resume source

`resume.tex` is the source of truth for the resume. Keep content and formatting edits in that file.

The compiled site asset belongs at `public/resume/resume.pdf`. To rebuild it, install [Tectonic](https://tectonic-typesetting.github.io/) and run:

```powershell
npm run resume:pdf
```

The build script compiles the supplied LaTeX source into the public PDF path used by the embedded preview and Download/Open actions.
