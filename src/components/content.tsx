export default function Content() {
	return (
		<div className="diy-tree">
			<ul className="nested">
				<li>
					<span className="folder">src</span>
					<ul className="nested">
						<li>
							<span className="folder">app</span>
							<ul className="nested">
								<li className="vip">
									<span className="folder">vip</span>
									<ul className="nested">
										<li>page.tsx</li>
									</ul>
								</li>
								<li>layout.tsx</li>
								<li>page.tsx</li>
							</ul>
						</li>
						<li>
							<span className="folder">components</span>
							<ul className="nested">
								<li>content.tsx</li>
								<li>vip.tsx</li>
							</ul>
						</li>
						<li>
							<span className="folder">styles</span>
							<ul className="nested">
								<li>
									<span className="folder">fonts</span>
									<ul className="nested">
										<li>GeistMonoVF.woff</li>
										<li>GeistVF.woff</li>
									</ul>
								</li>
								<li>globals.css</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	)
}