var Template = function() { return `<?xml version="1.0" encoding="UTF-8" ?>
<document>
    <menuBarTemplate>
        <menuBar>
            <menuItem template="${this.BASEURL}templates/CompilationTemplate.xml.js" presentation="menuBarItemPresenter">
                <title>Compilation</title>
            </menuItem>
            <menuItem template="${this.BASEURL}templates/RWDevConTemplate.xml.js" presentation="menuBarItemPresenter">
                <title>Dev Con</title>
            </menuItem>
            <menuItem template="${this.BASEURL}templates/BatesListTemplate2.xml.js" presentation="menuBarItemPresenter">
                <title>Bates 2</title>
            </menuItem>
        </menuBar>
    </menuBarTemplate>
</document>`
}
