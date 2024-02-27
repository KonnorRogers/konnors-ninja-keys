class Builders::ChangelogGenerator < SiteBuilder
  def build
    hook :site, :post_read do
      generate_changelog
      generate_readme
    end

    hook :site, :post_reload do
      generate_changelog
      generate_readme
    end
  end

  def generate_changelog
    changelog_file = File.expand_path("../../../CHANGELOG.md", __dir__)
    add_resource :documentation, "references/01-changelog.md" do
      title "Changelog"
      permalink "/references/changelog/"
      category "references"
      layout "doc"
      content File.read(changelog_file)
    end
  end

  def generate_readme
    readme_file = File.expand_path("../../../README.md", __dir__)
    add_resource :documentation, "references/00-readme.md" do
      title "README"
      permalink "/references/readme/"
      category "references"
      layout "doc"
      content File.read(readme_file)
    end
  end
end
