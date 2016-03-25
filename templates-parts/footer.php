			<footer class="footer">
				<div class="container">
					<div class="social-icons">
						<a href="https://www.instagram.com/caseagency/" target="_blank"><img src="/assets/img/sm-instagram.png" alt="Instagram"/></a>
						<a href="https://twitter.com/casenyc" target="_blank"><img src="/assets/img/sm-twitter.png" alt="Twitter"/></a>
						<a href="https://www.linkedin.com/company/case-nyc" target="_blank"><img src="/assets/img/sm-linkedin.png" alt="LinkedIn"/></a>
						<a href="https://open.spotify.com/user/casenyc" target="_blank"><img src="/assets/img/sm-spotify.png" alt="Spotify"/></a>
						<a href="https://medium.com/@caseagency" target="_blank"><img src="/assets/img/sm-medium.png" alt="Medium"/></a>
					</div>
					<a href="tel:+12126991842"><p>+1 212 699 1842</p></a>
					<a href="mailto:info@case-agency.com"><p>info@case-agency.com</p></a>
					<a href="https://www.google.com/maps/place/390+Broadway,+New+York,+NY+10013/@40.718363,-74.00264,16z/data=!4m2!3m1!1s0x89c25a209e8a9f93:0x7f34ce32cc84551d?hl=en" target="_blank"><p>390 Broadway, 3rd Floor</p></a>
					<a href="https://www.google.com/maps/place/390+Broadway,+New+York,+NY+10013/@40.718363,-74.00264,16z/data=!4m2!3m1!1s0x89c25a209e8a9f93:0x7f34ce32cc84551d?hl=en" target="_blank"><p>New York, NY 10013</p></a>
					<p>&copy;CASE <script>document.write(new Date().getFullYear())</script></p>
				</div>
			</footer>
		</main>
	</div>

	<?php if ( $isLocal ): ?>
		<script src='/assets/js/scripts.js?v=<?php echo $version ?>'></script>
	<?php else: ?>
		<script src='/assets/dist/scripts.min.js?v=<?php echo $version ?>'></script>
	<?php endif; ?>

</body>
</html>